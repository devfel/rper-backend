"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../entities/User"));
const typeorm_1 = require("typeorm");
class UsersRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(User_1.default);
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.ormRepository.findOne(id);
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.ormRepository.findOne({
                where: { email },
            });
            return user;
        });
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.ormRepository.create(userData);
            yield this.ormRepository.save(user);
            return user;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.save(user);
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.ormRepository.find();
            const usersNoPassword = users.map(el => {
                let userNoPassword = Object.assign(new User_1.default(), {
                    name: el.name,
                    avatar: el.avatar,
                    created_at: el.created_at,
                    email: el.email,
                    updated_at: el.updated_at,
                    user_id: el.user_id,
                    password: el.password,
                    avatar_url: el.getAvatarUrl(),
                });
                delete userNoPassword.password;
                return userNoPassword;
            });
            return usersNoPassword;
        });
    }
    findByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ormRepository.findByIds(ids);
        });
    }
}
exports.default = UsersRepository;
