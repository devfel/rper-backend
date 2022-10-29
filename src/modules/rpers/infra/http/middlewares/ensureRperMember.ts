import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import RpersRepository from '../../typeorm/repositories/RpersRepository';

export async function ensureRperMember(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const user_id = request.user.id;
    const { rper_id } = request.params;

    const rpersRepository = new RpersRepository();

    const rper = await rpersRepository.findById(rper_id);

    if (!rper) {
        throw new AppError('RPER not found', 404);
    }

    console.log("--- COORDINATOR ---");
    console.log(rper.coordinator_id !== user_id);
    console.log("RPER Coordinator ID: " + rper.coordinator_id);
    console.log("User ID: " + user_id);


    console.log("--- MEMBERS ---");
    console.log(!!rper.members?.find(rper => rper.user_id === user_id))
    console.log("RPER ID: " + rper.rper_id)
    console.log("RPER Members:" + rper.members);
    rper.members?.find(rper => {
        console.log("RPER User_ID: " + rper.user_id);
        console.log("User ID: " + user_id);
        return rper.user_id === user_id;
    })


    // both bellow has to be true to throw the error. //Meaning the user logged in is neither a coordinator nor a member. 
    if (
        rper.coordinator_id !== user_id &&                      // if the coordinator ID is different of the user logged in
        !rper.members?.find(rper => rper.user_id === user_id)   // Negate if find the user logged in ID in the members list
    ) {
        throw new AppError('User does not have permission. User is not a Member nor the Coordinator of this RPER.', 403);
    }

    return next();
}
