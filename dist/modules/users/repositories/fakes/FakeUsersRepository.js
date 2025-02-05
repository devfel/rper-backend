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
const uuid_1 = require("uuid");
const User_1 = __importDefault(require("../../infra/typeorm/entities/User"));
class FakeUsersRepository {
    constructor() {
        this.users = [];
    }
    findByIds(ids) {
        throw new Error('Method not implemented.');
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = this.users.find(user => user.user_id === id);
            return findUser;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = this.users.find(user => user.email === email);
            return findUser;
        });
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default();
            Object.assign(user, { user_id: (0, uuid_1.v4)() }, userData);
            this.users.push(user);
            return user;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const findIndex = this.users.findIndex(findUser => findUser.user_id === user.user_id);
            this.users[findIndex] = user;
            return user;
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let { users } = this;
            users = this.users.map(el => el);
            return users;
        });
    }
}
exports.default = FakeUsersRepository;
