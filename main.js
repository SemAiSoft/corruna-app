/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const rmd_module_1 = __webpack_require__("./src/app/rmd/rmd.module.ts");
const dvt_module_1 = __webpack_require__("./src/app/dvt/dvt.module.ts");
const core_1 = __webpack_require__("@nestjs/core");
const rmd_routing_1 = __webpack_require__("./src/app/rmd/rmd.routing.ts");
const dvt_routing_1 = __webpack_require__("./src/app/dvt/dvt.routing.ts");
const nix_module_1 = __webpack_require__("./src/app/nix/nix.module.ts");
const nix_routing_1 = __webpack_require__("./src/app/nix/nix.routing.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const user_account_module_1 = __webpack_require__("./src/app/nix/common/user-account/user-account.module.ts");
const account_service_1 = __webpack_require__("./src/app/nix/common/user-account/services/account.service.ts");
const cpt_module_1 = __webpack_require__("./src/app/cpt/cpt.module.ts");
const cpt_routing_1 = __webpack_require__("./src/app/cpt/cpt.routing.ts");
// mongorestore --gzip --archive=salonaDb-15-02-24 --nsFrom="d5758e192ddfa55ae19d3f726eb3b9e7.*" --nsTo="RmdSalonaDb.*"
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            lib_serverConfig_1.ServerConfigModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: lib_serverConfig_1.StoreService.staticSitePath('corunna', true),
                exclude: ['/rmd/*', '/dvt/*', '/nix/*', '/cpt/*'],
            }),
            lib_dbConfig_1.DbConfigModule.register({
                dbConnIndex: lib_dbConfig_1.EDbProvider.dbConn1,
                dbIndex: lib_dbConfig_1.EDbProvider.db1,
                global: true,
            }),
            lib_nest_modules_1.IdempotencyModule,
            nix_module_1.NixModule,
            rmd_module_1.RmdModule,
            dvt_module_1.DvtModule,
            cpt_module_1.CptModule,
            core_1.RouterModule.register([
                ...rmd_routing_1.RmdModuleRoute,
                ...dvt_routing_1.DvtModuleRouting,
                ...nix_routing_1.NixModuleRouting,
                ...cpt_routing_1.CptModuleRoute
            ]),
            lib_nest_modules_1.AuthModule.forRootAsync(lib_nest_modules_1.AuthModule, {
                imports: [lib_serverConfig_1.ServerConfigModule, user_account_module_1.UserAccountModule],
                inject: [lib_serverConfig_1.ServerConfigService, account_service_1.UserAccountService],
                useFactory: (config, userService) => {
                    return {
                        secret: config.appCode,
                        userService,
                        uniqueUserProp: 'email'
                    };
                },
                exports: [lib_serverConfig_1.ServerConfigModule]
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/cpt/common/game/controllers/game-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const game_query_service_1 = __webpack_require__("./src/app/cpt/common/game/services/game-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let GameQueryController = class GameQueryController {
    constructor(gameQueryService) {
        this.gameQueryService = gameQueryService;
    }
    games() {
        return this.gameQueryService.gameList();
    }
    getHistory(sDate, eDate) {
        return this.gameQueryService.gameHistory(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getGameHome() {
        return this.gameQueryService.gameHome();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.games),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "games", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.gameHistory),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "getHistory", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.gameHome),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "getGameHome", null);
GameQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EGameQuery.gameQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof game_query_service_1.GameQueryService !== "undefined" && game_query_service_1.GameQueryService) === "function" ? _a : Object])
], GameQueryController);
exports.GameQueryController = GameQueryController;


/***/ }),

/***/ "./src/app/cpt/common/game/controllers/game-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const game_store_service_1 = __webpack_require__("./src/app/cpt/common/game/services/game-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let GameStoreController = class GameStoreController {
    constructor(gameStoreService) {
        this.gameStoreService = gameStoreService;
    }
    saveGame(game) {
        return this.gameStoreService.save(game);
    }
    deleteGame(gameId) {
        return this.gameStoreService.delete(gameId);
    }
    playGame(game) {
        return this.gameStoreService.playGame(game);
    }
    deleteHistory(type, id) {
        return this.gameStoreService.deleteHistory(id, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EGameStore.game),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IRmdGame !== "undefined" && lib_xUtils_1.IRmdGame) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "saveGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EGameStore.game + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "deleteGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Post)(lib_xUtils_1.EGameStore.gamePlay),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IRmdGamePlay !== "undefined" && lib_xUtils_1.IRmdGamePlay) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "playGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EGameStore.gameHistory + '/:id'),
    tslib_1.__param(0, (0, common_1.Query)('type')),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "deleteHistory", null);
GameStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EGameStore.gameStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof game_store_service_1.GameStoreService !== "undefined" && game_store_service_1.GameStoreService) === "function" ? _a : Object])
], GameStoreController);
exports.GameStoreController = GameStoreController;


/***/ }),

/***/ "./src/app/cpt/common/game/game.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const game_store_controller_1 = __webpack_require__("./src/app/cpt/common/game/controllers/game-store.controller.ts");
const game_query_controller_1 = __webpack_require__("./src/app/cpt/common/game/controllers/game-query.controller.ts");
const game_query_service_1 = __webpack_require__("./src/app/cpt/common/game/services/game-query.service.ts");
const game_store_service_1 = __webpack_require__("./src/app/cpt/common/game/services/game-store.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const game_schema_1 = __webpack_require__("./src/app/cpt/common/game/game.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/cpt/common/settings/settings.schema.ts");
// healMahTechAtEvenNodeDb
let GameModule = class GameModule {
};
GameModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [game_store_controller_1.GameStoreController, game_query_controller_1.GameQueryController],
        providers: [
            game_store_service_1.GameStoreService,
            game_query_service_1.GameQueryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.gameModel,
                modelSchema: game_schema_1.gameSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
        ],
    })
], GameModule);
exports.GameModule = GameModule;


/***/ }),

/***/ "./src/app/cpt/common/game/game.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gamePlayedSchema = exports.gameSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
exports.gameSchema = new mongoose_1.Schema({
    gameName: {
        type: String,
        required: true,
    },
    gameCost: {
        type: Number,
        required: true,
    },
    numOfTimes: Number,
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel
    },
    payMethod: String,
}, { timestamps: true });
exports.gamePlayedSchema = new mongoose_1.Schema({
    invoiceId: {
        type: String,
        required: true
    },
    player: String,
    gameItems: [exports.gameSchema],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/cpt/common/game/services/game-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let GameQueryService = class GameQueryService {
    constructor(gameModel, gamePlayedModel, systemConfigModel) {
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.systemConfigModel = systemConfigModel;
    }
    gameList() {
        return this.gameModel.find({});
    }
    gameHistory(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            if (!config)
                return;
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if (config.commissionRange == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if (config.commissionRange == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if (config.commissionRange == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            // const gamesStats = await this.gamePlayedModel.aggregate([
            //   {
            //     $match: {
            //       createdAt: dateRangeFilter
            //     }
            //   },
            //   {
            //     $unwind: '$gameItems'
            //   },
            //   {
            //     $match: {
            //       $and: [
            //         {'deleted': false},
            //         {'gameItems.deleted': false},
            //       ]
            //     }
            //   },
            //   {
            //     $group: {
            //       _id: null,
            //       count: {
            //         $sum: '$gameItems.numOfTimes'
            //       },
            //       amount: {
            //         $sum: {
            //           $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
            //         }
            //       }
            //     }
            //   }
            // ]);
            const gamesByPayMethod = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const gamesTotalAmount = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const history = yield this.gamePlayedModel.find({
                createdAt: dateRangeFilter,
            }).populate([
                {
                    path: 'userAccount',
                    model: cpt_db_model_1.ECptDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                },
                {
                    path: 'gameItems.deletedBy',
                    model: cpt_db_model_1.ECptDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                }
            ]);
            return {
                history,
                gamesTotalAmount: (gamesTotalAmount === null || gamesTotalAmount === void 0 ? void 0 : gamesTotalAmount.length) ? gamesTotalAmount[0] : {},
                gamesByPayMethod
            };
        });
    }
    gameHome() {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            if (!config)
                return;
            let dateRangeFilter = {};
            if (config.commissionRange == 'Daily') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                };
            }
            if (config.commissionRange == 'Weekly') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                };
            }
            if (config.commissionRange == 'Monthly') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                };
            }
            const gamesCount = (_a = (yield this.gameModel.find({}))) === null || _a === void 0 ? void 0 : _a.length;
            const gamesStats = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: {
                            $sum: '$gameItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const popularGames = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.gameName',
                        count: {
                            $sum: '$gameItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 5
                }
            ]);
            return {
                gamesCount: gamesCount,
                gameStats: gamesStats.length ? gamesStats[0] : {},
                popularGames: popularGames
            };
        });
    }
};
GameQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gameModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gamePlayedModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.systemConfigModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], GameQueryService);
exports.GameQueryService = GameQueryService;


/***/ }),

/***/ "./src/app/cpt/common/game/services/game-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let GameStoreService = class GameStoreService {
    constructor(gameModel, gamePlayedModel, cls) {
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.cls = cls;
    }
    save(game) {
        if (game === null || game === void 0 ? void 0 : game._id)
            return this.gameModel.findByIdAndUpdate(game === null || game === void 0 ? void 0 : game._id, game);
        return this.gameModel.create(game);
    }
    delete(gameId) {
        if (this.cls.get('contextUser._id'))
            return this.gameModel.deleteById(gameId, this.cls.get('contextUser._id'));
        throw new Error('Invalid Authentication');
    }
    playGame(game) {
        game.userAccount = this.cls.get('contextUser._id');
        game.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
        return this.gamePlayedModel.create(game);
    }
    deleteHistory(id, type) {
        const userId = this.cls.get('contextUser._id');
        if (type == 'batch') {
            return this.gamePlayedModel.deleteById(id, userId);
        }
        return this.gamePlayedModel.findOneAndUpdate({
            'gameItems._id': { $in: [id] }
        }, {
            $set: {
                'gameItems.$.deleted': true,
                'gameItems.$.deletedBy': this.cls.get('contextUser._id'),
                'gameItems.$.deletedAt': new Date(),
            }
        }, {
            new: true,
            strict: false,
            strictQuery: false
        }).populate([
            {
                path: 'userAccount',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
            {
                path: 'gameItems.deletedBy',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            }
        ]);
    }
};
GameStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gameModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gamePlayedModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], GameStoreService);
exports.GameStoreService = GameStoreService;


/***/ }),

/***/ "./src/app/cpt/common/services/controllers/services-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const services_query_service_1 = __webpack_require__("./src/app/cpt/common/services/services/services-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let ServicesQueryController = class ServicesQueryController {
    constructor(servicesQueryService) {
        this.servicesQueryService = servicesQueryService;
    }
    getServices() {
        return this.servicesQueryService.getServices();
    }
    getDashboardServices(sDate, eDate, staffId) {
        return this.servicesQueryService.getRenderedDashboardService(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null, staffId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EServicesQuery.getServices),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesQueryController.prototype, "getServices", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard', 'Basic'], "*"),
    (0, common_1.Get)(lib_xUtils_1.EServicesQuery.getRenderedDashoardService),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__param(2, (0, common_1.Query)('staffId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesQueryController.prototype, "getDashboardServices", null);
ServicesQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EServicesQuery.servicesQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_query_service_1.ServicesQueryService !== "undefined" && services_query_service_1.ServicesQueryService) === "function" ? _a : Object])
], ServicesQueryController);
exports.ServicesQueryController = ServicesQueryController;


/***/ }),

/***/ "./src/app/cpt/common/services/controllers/services-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const services_store_service_1 = __webpack_require__("./src/app/cpt/common/services/services/services-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let ServicesStoreController = class ServicesStoreController {
    constructor(servicesStoreService) {
        this.servicesStoreService = servicesStoreService;
    }
    saveService(serviceForm) {
        return this.servicesStoreService.saveServiceItem(serviceForm);
    }
    deleteService(serviceId) {
        return this.servicesStoreService.deleteService(serviceId);
    }
    renderService(renderedService, renderedBy) {
        renderedService.renderedBy = renderedBy;
        return this.servicesStoreService.renderService(renderedService);
    }
    deleteRenderedService(serviceId, batchId, type) {
        return this.servicesStoreService.deleteRenderedServices(batchId, serviceId, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EServicesStore.saveService),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "saveService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EServicesStore.deleteService + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "deleteService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EServicesStore.renderService),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Query)('renderedBy')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IServiceRendered !== "undefined" && lib_xUtils_1.IServiceRendered) === "function" ? _b : Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "renderService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EServicesStore.deleteRenderedService + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('batchId')),
    tslib_1.__param(2, (0, common_1.Query)('type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "deleteRenderedService", null);
ServicesStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EServicesStore.servicesStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_store_service_1.ServicesStoreService !== "undefined" && services_store_service_1.ServicesStoreService) === "function" ? _a : Object])
], ServicesStoreController);
exports.ServicesStoreController = ServicesStoreController;


/***/ }),

/***/ "./src/app/cpt/common/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const services_store_controller_1 = __webpack_require__("./src/app/cpt/common/services/controllers/services-store.controller.ts");
const services_query_controller_1 = __webpack_require__("./src/app/cpt/common/services/controllers/services-query.controller.ts");
const services_store_service_1 = __webpack_require__("./src/app/cpt/common/services/services/services-store.service.ts");
const services_query_service_1 = __webpack_require__("./src/app/cpt/common/services/services/services-query.service.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const services_schema_1 = __webpack_require__("./src/app/cpt/common/services/services.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/cpt/common/settings/settings.schema.ts");
let ServicesModule = class ServicesModule {
};
ServicesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [services_store_controller_1.ServicesStoreController, services_query_controller_1.ServicesQueryController],
        providers: [services_store_service_1.ServicesStoreService, services_query_service_1.ServicesQueryService,
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceItemModel,
                modelSchema: services_schema_1.serviceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceRenderedItemModel,
                modelSchema: services_schema_1.renderedServiceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            })
        ]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./src/app/cpt/common/services/services.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serviceRenderedSchema = exports.renderedServiceItemSchema = exports.serviceItemSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
exports.serviceItemSchema = new mongoose_1.Schema({
    serviceName: {
        type: String,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
    serviceCommission: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.renderedServiceItemSchema = new mongoose_1.Schema({
    serviceName: {
        type: String,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
    serviceCommission: {
        type: Number,
        required: true
    },
    commissionAmount: {
        type: Number,
        required: true
    },
    numOfTimes: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    },
    payMethod: String
}, {
    timestamps: true
});
exports.serviceRenderedSchema = new mongoose_1.Schema({
    invoiceId: String,
    serviceItems: [exports.renderedServiceItemSchema],
    renderedBy: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
        required: true
    },
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel
    }
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/cpt/common/services/services/services-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const mongoose_1 = __webpack_require__("mongoose");
let ServicesQueryService = class ServicesQueryService {
    constructor(serviceItemModel, serviceRenderedModel, systemConfigModel) {
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.systemConfigModel = systemConfigModel;
    }
    getServices() {
        return this.serviceItemModel.find({});
    }
    getRenderedDashboardService(sDate, eDate, staffId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if (config.commissionRange == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if (config.commissionRange == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if (config.commissionRange == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const match = staffId && staffId !== 'undefined' ? {
                deleted: false,
                createdAt: dateRangeFilter,
                renderedBy: new mongoose_1.Types.ObjectId(staffId)
            } : {
                deleted: false,
                createdAt: dateRangeFilter
            };
            // console.log('hair ',dateRangeFilter, config.commissionRange, sDate, eDate, sDate == 'null' as any);
            const totalRenderedAmount = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems',
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                }
            ]);
            const renderedByCommission = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.serviceCommission',
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const renderedByPayMethod = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.payMethod',
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const renderedByStaff = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                },
                {
                    $lookup: {
                        from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'renderedBy',
                        foreignField: '_id', as: 'staff'
                    }
                },
                {
                    $group: {
                        _id: { $arrayElemAt: ['$staff._id', -1] },
                        serviceCost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                        staff: {
                            $addToSet: {
                                $arrayElemAt: ['$staff', -1]
                            }
                        },
                        services: {
                            $push: '$serviceItems'
                        }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        commissionAmount: '$commissionAmount',
                        serviceCost: '$serviceCost',
                        staff: {
                            $arrayElemAt: ['$staff', -1]
                        },
                        staffName: {
                            $concat: [
                                {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                },
                                " ",
                                {
                                    $arrayElemAt: ['$staff.surName', -1]
                                }
                            ]
                        },
                        services: '$services'
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const dashboardServices = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $sort: { 'createdAt': 1 },
                },
                {
                    $lookup: {
                        from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'renderedBy',
                        foreignField: '_id', as: 'staff'
                    }
                },
                {
                    $lookup: {
                        from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'userAccount',
                        foreignField: '_id', as: 'userAccount'
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems._id',
                        batchId: { $push: '$_id' },
                        invoiceId: { $push: '$invoiceId' },
                        renderedBy: { $push: { $arrayElemAt: ['$staff', -1] } },
                        userAccount: { $push: { $arrayElemAt: ['$userAccount', -1] } },
                        serviceName: { $push: '$serviceItems.serviceName' },
                        serviceCost: { $push: '$serviceItems.serviceCost' },
                        serviceCommission: { $push: '$serviceItems.serviceCommission' },
                        commissionAmount: { $push: '$serviceItems.commissionAmount' },
                        numOfTimes: { $push: '$serviceItems.numOfTimes' },
                        payMethod: { $push: '$serviceItems.payMethod' },
                        createdAt: { $push: '$serviceItems.createdAt' },
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        invoiceId: { $arrayElemAt: ['$invoiceId', -1] },
                        batchId: { $arrayElemAt: ['$batchId', -1] },
                        renderedBy: { $arrayElemAt: ['$renderedBy', -1] },
                        userAccount: { $arrayElemAt: ['$userAccount.firstName', -1] },
                        serviceName: { $arrayElemAt: ['$serviceName', -1] },
                        serviceCost: { $arrayElemAt: ['$serviceCost', -1] },
                        serviceCommission: { $arrayElemAt: ['$serviceCommission', -1] },
                        commissionAmount: { $arrayElemAt: ['$commissionAmount', -1] },
                        numOfTimes: { $arrayElemAt: ['$numOfTimes', -1] },
                        payMethod: { $arrayElemAt: ['$payMethod', -1] },
                        createdAt: { $arrayElemAt: ['$createdAt', -1] },
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                }
            ]);
            const dashboardbatchServices = yield this.serviceRenderedModel.find(Object.assign({}, match)).populate([
                {
                    path: 'renderedBy',
                    model: cpt_db_model_1.ECptDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                }
            ]);
            return {
                main: (totalRenderedAmount === null || totalRenderedAmount === void 0 ? void 0 : totalRenderedAmount.length) ? totalRenderedAmount[0] : {},
                byPayMethod: renderedByPayMethod,
                byCommission: renderedByCommission,
                byStaff: renderedByStaff,
                services: dashboardServices,
                byBatch: dashboardbatchServices
            };
        });
    }
};
ServicesQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceRenderedModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.systemConfigModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], ServicesQueryService);
exports.ServicesQueryService = ServicesQueryService;


/***/ }),

/***/ "./src/app/cpt/common/services/services/services-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let ServicesStoreService = class ServicesStoreService {
    constructor(serviceItemModel, serviceRenderedModel, cls) {
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.cls = cls;
    }
    saveServiceItem(serviceItem) {
        if (serviceItem === null || serviceItem === void 0 ? void 0 : serviceItem._id) {
            return this.serviceItemModel.findByIdAndUpdate(serviceItem._id, serviceItem);
        }
        else {
            return this.serviceItemModel.create(serviceItem);
        }
    }
    deleteService(serviceId) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const service = yield this.serviceItemModel.deleteById(serviceId, (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id);
            if (service === null || service === void 0 ? void 0 : service.modifiedCount)
                return this.serviceItemModel.find({});
        });
    }
    renderService(serviceRendered) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            serviceRendered.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
            serviceRendered.userAccount = (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id;
            return (yield this.serviceRenderedModel.create(serviceRendered)).populate([
                {
                    path: 'renderedBy',
                    model: cpt_db_model_1.ECptDbModels.userAccountModel,
                    select: 'emai firstName surName',
                    options: { withDeleted: true },
                },
            ]);
        });
    }
    deleteRenderedServices(batchId, serviceId, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'single') {
                const deletion = yield this.serviceRenderedModel.findOneAndUpdate({
                    'serviceItems._id': { $in: [serviceId] }
                }, {
                    $set: {
                        'serviceItems.$.deleted': true,
                        'serviceItems.$.deletedBy': this.cls.get('contextUser._id'),
                        'serviceItems.$.deletedAt': new Date(),
                    }
                }, {
                    new: true,
                    strict: false,
                    strictQuery: false
                });
                return deletion;
            }
            else {
                return this.serviceRenderedModel.deleteById(batchId, this.cls.get('contextUser._id'));
            }
        });
    }
};
ServicesStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceRenderedModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], ServicesStoreService);
exports.ServicesStoreService = ServicesStoreService;


/***/ }),

/***/ "./src/app/cpt/common/settings/controllers/settings-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const settings_query_service_1 = __webpack_require__("./src/app/cpt/common/settings/services/settings-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsQueryController = class SettingsQueryController {
    constructor(settingsQueryService) {
        this.settingsQueryService = settingsQueryService;
    }
    getDeleted(sDate, eDate) {
        return this.settingsQueryService.getDeleted(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getSystemConfig() {
        return this.settingsQueryService.getSystemCnfig();
    }
    getExpenditures(sDate, eDate) {
        return this.settingsQueryService.getExpenditures(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getTodos(sDate, eDate) {
        return this.settingsQueryService.getTodos(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getStaffPay(sDate, eDate) {
        return this.settingsQueryService.getStaffPays(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getDeleted", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.getSettings),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getSystemConfig", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.expenditure),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getExpenditures", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.todo),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getTodos", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.staffPay),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getStaffPay", null);
SettingsQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsQuery.settingsQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_query_service_1.SettingsQueryService !== "undefined" && settings_query_service_1.SettingsQueryService) === "function" ? _a : Object])
], SettingsQueryController);
exports.SettingsQueryController = SettingsQueryController;


/***/ }),

/***/ "./src/app/cpt/common/settings/controllers/settings-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const settings_store_service_1 = __webpack_require__("./src/app/cpt/common/settings/services/settings-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsStoreController = class SettingsStoreController {
    constructor(settingsStoreService) {
        this.settingsStoreService = settingsStoreService;
    }
    saveSetting(settings) {
        return this.settingsStoreService.saveSettings(settings);
    }
    saveExpense(expense) {
        return this.settingsStoreService.saveExpenditure(expense);
    }
    deleteExpenditure(expenseId) {
        return this.settingsStoreService.deleteExpenditure(expenseId);
    }
    saveTodo(todo) {
        return this.settingsStoreService.saveTodo(todo);
    }
    markTodoDone(todo) {
        return this.settingsStoreService.markTodoDone(todo);
    }
    deleteTodo(todoId) {
        return this.settingsStoreService.deleteTodo(todoId);
    }
    saveStaffPay(staffPay) {
        return this.settingsStoreService.saveStaffPay(staffPay);
    }
    deleteStaffPay(payId) {
        return this.settingsStoreService.deleteStaffPay(payId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.saveSettings),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.ISystemConfig !== "undefined" && lib_xUtils_1.ISystemConfig) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveSetting", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)("*", "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.expenditure),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IExpenditure !== "undefined" && lib_xUtils_1.IExpenditure) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveExpense", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.expenditure + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteExpenditure", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.todo),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof lib_xUtils_1.ITodo !== "undefined" && lib_xUtils_1.ITodo) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveTodo", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Put)(lib_xUtils_1.ESettingsStore.todo + '/:todo'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof lib_xUtils_1.ITodo !== "undefined" && lib_xUtils_1.ITodo) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "markTodoDone", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.todo + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteTodo", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], '*'),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.staffPay),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof lib_xUtils_1.IRmdStaffPay !== "undefined" && lib_xUtils_1.IRmdStaffPay) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveStaffPay", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.staffPay + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteStaffPay", null);
SettingsStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsStore.settingsStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_store_service_1.SettingsStoreService !== "undefined" && settings_store_service_1.SettingsStoreService) === "function" ? _a : Object])
], SettingsStoreController);
exports.SettingsStoreController = SettingsStoreController;


/***/ }),

/***/ "./src/app/cpt/common/settings/services/settings-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let SettingsQueryService = class SettingsQueryService {
    constructor(systemConfigModel, expenditureModel, stockItemModel, saleModel, serviceItemModel, serviceRenderedModel, gameModel, gamePlayedModel, userAccountModel, todoModel, staffPayModel) {
        this.systemConfigModel = systemConfigModel;
        this.expenditureModel = expenditureModel;
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.userAccountModel = userAccountModel;
        this.todoModel = todoModel;
        this.staffPayModel = staffPayModel;
    }
    getSystemCnfig() {
        return this.systemConfigModel.findOne();
    }
    getExpenditures(sDate, eDate) {
        return this.expenditureModel.find({
            expenseDate: {
                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate)),
            }
        }).populate([
            {
                path: 'userAccount',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
        ])
            .sort({
            createdAt: -1
        });
    }
    getTodos(sDate, eDate) {
        const dateRangeFilter = {
            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
        };
        return this.todoModel.find({
            createdAt: dateRangeFilter
        }).populate([
            {
                path: 'userAccount',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
            {
                path: 'todoDoneBy',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
        ])
            .sort({
            todoDone: 1,
            createdAt: -1
        });
    }
    getStaffPays(sDate, eDate) {
        const dateRangeFilter = {
            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
        };
        return this.staffPayModel.aggregate([
            {
                $match: {
                    createdAt: dateRangeFilter
                }
            },
            {
                $lookup: {
                    from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                    localField: 'userAccount',
                    foreignField: '_id',
                    as: 'userAccount'
                }
            },
            {
                $lookup: {
                    from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                    localField: 'staff',
                    foreignField: '_id',
                    as: 'staff'
                }
            },
            {
                $group: {
                    _id: { $arrayElemAt: ['$staff._id', -1] },
                    staffPays: {
                        $addToSet: '$$ROOT'
                    },
                    payAmount: {
                        $sum: '$payAmount'
                    },
                    userAccount: {
                        $addToSet: { $arrayElemAt: ['$userAccount', -1] }
                    },
                    staff: {
                        $addToSet: { $arrayElemAt: ['$staff', -1] }
                    }
                }
            },
            {
                $lookup: {
                    localField: '_id',
                    foreignField: 'renderedBy',
                    from: cpt_db_model_1.ECptDbModels.serviceRenderedModel.toLocaleLowerCase() + 's',
                    as: 'serviceCom',
                    pipeline: [
                        {
                            $match: {
                                createdAt: dateRangeFilter,
                            }
                        },
                        {
                            $unwind: '$serviceItems'
                        },
                        {
                            $match: {
                                $and: [
                                    { 'deleted': false },
                                    {
                                        $or: [
                                            { 'serviceItems.deleted': { $exists: false } },
                                            { 'serviceItems.deleted': !true },
                                        ],
                                    },
                                ]
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                commissionAmount: {
                                    $sum: {
                                        $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                                    },
                                },
                            }
                        }
                    ]
                }
            },
            {
                $project: {
                    _id: '$_id',
                    payAmount: '$payAmount',
                    serviceCom: {
                        $cond: [
                            {
                                $ifNull: [{ $arrayElemAt: ['$serviceCom.commissionAmount', -1] }, false] //return value 'false' if null
                            },
                            { $arrayElemAt: ['$serviceCom.commissionAmount', -1] },
                            0, // if 'false'
                        ]
                    },
                    staffPays: '$staffPays',
                    staffName: {
                        $concat: [
                            {
                                $arrayElemAt: ['$staff.firstName', -1]
                            },
                            ' ',
                            {
                                $arrayElemAt: ['$staff.surName', -1]
                            },
                        ]
                    },
                    balance: {
                        $cond: [
                            {
                                $ifNull: [{ $arrayElemAt: ['$serviceCom.commissionAmount', -1] }, false] //return value 'false' if null
                            },
                            {
                                $subtract: [
                                    { $arrayElemAt: ['$serviceCom.commissionAmount', -1] },
                                    '$payAmount'
                                ],
                            },
                            'Unknown', // if 'false'
                        ]
                    }
                }
            },
            {
                $sort: {
                    staffName: 1
                }
            }
        ]);
    }
    getDeleted(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dateRangeFilter = {
                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
            };
            let deleted = [];
            deleted = [...deleted, ...yield this.saleModel.aggregate([
                    {
                        $match: {
                            'saleItems.deleted': true,
                            'saleItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'saleItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$saleItems._id',
                            itemName: {
                                $push: '$saleItems.itemName'
                            },
                            quantity: {
                                $push: '$saleItems.quantity'
                            },
                            unitSellingPrice: {
                                $push: '$saleItems.unitSellingPrice'
                            },
                            deletedAt: {
                                $push: '$saleItems.deletedAt'
                            },
                            deletionDate: {
                                $push: '$saleItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: { $arrayElemAt: ['$deletedAt', -1] },
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$itemName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: { $arrayElemAt: ['$quantity', -1] }
                                    },
                                    ") @ N",
                                    {
                                        $toString: { $arrayElemAt: ['$unitSellingPrice', -1] }
                                    },
                                    "/1",
                                ]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            desc: '$desc',
                            deletedBy: '$deletedBy.firstName',
                            deletedAt: '$deletedAt',
                            deletionDate: '$deletionDate',
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.stockItemModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff', -1] },
                            desc: {
                                $concat: [
                                    '$itemName',
                                    " (",
                                    {
                                        $toString: '$quantity',
                                    },
                                    "qtty)",
                                    // {
                                    //   $toString: '$unitSellingPrice'
                                    // },
                                    // "/1",
                                ]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            desc: '$desc',
                            deletedBy: '$deletedBy.firstName',
                            deletedAt: '$deletedAt',
                            deletionDate: '$deletionDate',
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.saleModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$saleItems.amount',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "itms) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceItemModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff.firstName', -1] },
                            desc: {
                                $concat: [
                                    '$serviceName',
                                    " (N",
                                    {
                                        $toString: '$serviceCost',
                                    },
                                    ") @",
                                    {
                                        $toString: '$serviceCommission',
                                    },
                                    "%",
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceRenderedModel.aggregate([
                    {
                        $match: {
                            'serviceItems.deleted': true,
                            'serviceItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$serviceItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'serviceItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$serviceItems._id',
                            serviceName: {
                                $push: '$serviceItems.serviceName'
                            },
                            numOfTimes: {
                                $sum: '$serviceItems.numOfTimes'
                            },
                            serviceCost: {
                                $sum: '$serviceItems.serviceCost'
                            },
                            serviceCommission: {
                                $sum: '$serviceItems.serviceCommission'
                            },
                            deletedAt: {
                                $push: '$serviceItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$serviceName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$numOfTimes'
                                    },
                                    "x) @ N",
                                    {
                                        $toString: '$serviceCost'
                                    },
                                    "/1 (",
                                    {
                                        $toString: '$serviceCommission'
                                    },
                                    "%)",
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceRenderedModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$serviceItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$serviceItems.serviceCost',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "scs) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.gameModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff.firstName', -1] },
                            desc: {
                                $concat: [
                                    '$gameName',
                                    " (N",
                                    {
                                        $toString: '$gameCost',
                                    },
                                    ')'
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.gamePlayedModel.aggregate([
                    {
                        $match: {
                            'gameItems.deleted': true,
                            'gameItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$gameItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'gameItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$gameItems._id',
                            gameName: {
                                $push: '$gameItems.gameName'
                            },
                            numOfTimes: {
                                $sum: '$gameItems.numOfTimes'
                            },
                            gameCost: {
                                $sum: '$gameItems.gameCost'
                            },
                            deletedAt: {
                                $push: '$gameItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$gameName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$numOfTimes'
                                    },
                                    "x) @ N",
                                    {
                                        $toString: '$gameCost'
                                    },
                                ]
                            }
                        }
                    },
                ])];
            deleted = [...deleted, ...yield this.gamePlayedModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$gameItems'
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$gameItems.gameCost',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "gms) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.userAccountModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$deletedBy.firstName',
                            desc: {
                                $concat: [
                                    '$email',
                                    ' (',
                                    '$firstName',
                                    ') - ',
                                    '$acctType'
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.expenditureModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Exp - ',
                                    '$expenseRemark',
                                    ' (',
                                    'N',
                                    {
                                        $toString: '$expenseAmount'
                                    },
                                    ')',
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.todoModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Todo - ',
                                    '$todoNote',
                                    // ' (',
                                    // 'N',
                                    // {
                                    //   $toString: '$expenseAmount'
                                    // },
                                    // ')',
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.staffPayModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'staff',
                            foreignField: '_id',
                            as: 'toStaff'
                        }
                    },
                    {
                        $lookup: {
                            from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Payout @ ',
                                    { $arrayElemAt: ['$toStaff.firstName', -1] },
                                    ' (',
                                    'N',
                                    {
                                        $toString: '$payAmount'
                                    },
                                    ')',
                                ]
                            }
                        }
                    }
                ])];
            return (0, lib_xUtils_1.sortByAttribute)(deleted, '-deletedAt');
        });
    }
};
SettingsQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.systemConfigModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.expenditureModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.stockItemModel)),
    tslib_1.__param(3, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.saleModel)),
    tslib_1.__param(4, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceItemModel)),
    tslib_1.__param(5, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceRenderedModel)),
    tslib_1.__param(6, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gameModel)),
    tslib_1.__param(7, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gamePlayedModel)),
    tslib_1.__param(8, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.userAccountModel)),
    tslib_1.__param(9, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.todoModel)),
    tslib_1.__param(10, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object, typeof (_f = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _f : Object, typeof (_g = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _g : Object, typeof (_h = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _h : Object, typeof (_j = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _j : Object, typeof (_k = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _k : Object, typeof (_l = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _l : Object])
], SettingsQueryService);
exports.SettingsQueryService = SettingsQueryService;


/***/ }),

/***/ "./src/app/cpt/common/settings/services/settings-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let SettingsStoreService = class SettingsStoreService {
    constructor(systemConfigModel, expenditureModel, todoModel, staffPayModel, cls) {
        // const fnc = async()=>{
        // }
        // dbConnection.db.listCollections().forEach((col)=>{
        //   col.name
        // })
        // dbConnection.db.listCollections().toArray(function(err, names) {
        //   if (err) {
        //       console.log(err);
        //   }
        //   else {
        //       names.forEach(function(e,i,a) {
        //           // mongoose.connection.db.dropCollection(e.name);
        //           console.log("--->>", e.name);
        //       });
        //   }
        // })
        // console.log(dbConnection.db.collections().then((col)));
        // dbConnection.db.collections().then((col)=>{
        //   console.log(col.);
        this.systemConfigModel = systemConfigModel;
        this.expenditureModel = expenditureModel;
        this.todoModel = todoModel;
        this.staffPayModel = staffPayModel;
        this.cls = cls;
        // })
        // const cols = Array.from(dbConnection.collections)
        // console.log(dbConnection.collections, " COLLECTIONS");
        // const cols = Object.entries(dbConnection.collections).forEach((col)=>{
        // Object.entries(dbConnection.collections).forEach((col, i)=>{
        //   console.log('Col '+i, col[0]);
        // });
        // // console.log(cols, " COLLECTIONS");
        // console.log(dbConnection.c);
    }
    renameCollections() {
    }
    saveSettings(config) {
        if (config === null || config === void 0 ? void 0 : config._id) {
            return this.systemConfigModel.findByIdAndUpdate(config._id, config, {
                new: true
            });
        }
        else {
            return this.systemConfigModel.create(config);
        }
    }
    saveExpenditure(expense) {
        const userAccount = this.cls.get('contextUser._id');
        expense.userAccount = userAccount;
        return this.expenditureModel.create(expense);
    }
    deleteExpenditure(expenseId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.expenditureModel.deleteById(expenseId, userAccount);
    }
    saveTodo(todo) {
        const userAccount = this.cls.get('contextUser._id');
        todo.userAccount = userAccount;
        todo.todoDone = false;
        return this.todoModel.create(todo);
    }
    markTodoDone(todo) {
        todo.todoDoneBy = this.cls.get('contextUser._id');
        ;
        todo.todoDoneAt = new Date();
        todo.todoDone = true;
        return this.todoModel.findByIdAndUpdate(todo === null || todo === void 0 ? void 0 : todo._id, todo, { new: true });
    }
    deleteTodo(todoId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.todoModel.deleteById(todoId, userAccount);
    }
    saveStaffPay(pay) {
        const userAccount = this.cls.get('contextUser._id');
        pay.userAccount = userAccount;
        return this.staffPayModel.create(pay);
    }
    deleteStaffPay(payId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.staffPayModel.deleteById(payId, userAccount);
    }
};
SettingsStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.systemConfigModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.expenditureModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.todoModel)),
    tslib_1.__param(3, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _e : Object])
], SettingsStoreService);
exports.SettingsStoreService = SettingsStoreService;


/***/ }),

/***/ "./src/app/cpt/common/settings/settings-module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const settings_query_service_1 = __webpack_require__("./src/app/cpt/common/settings/services/settings-query.service.ts");
const settings_store_service_1 = __webpack_require__("./src/app/cpt/common/settings/services/settings-store.service.ts");
const settings_store_controller_1 = __webpack_require__("./src/app/cpt/common/settings/controllers/settings-store.controller.ts");
const settings_query_controller_1 = __webpack_require__("./src/app/cpt/common/settings/controllers/settings-query.controller.ts");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/cpt/common/settings/settings.schema.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const account_schema_1 = __webpack_require__("./src/app/cpt/common/user-account/account.schema.ts");
const stocks_schema_1 = __webpack_require__("./src/app/cpt/common/stocks/stocks.schema.ts");
const services_schema_1 = __webpack_require__("./src/app/cpt/common/services/services.schema.ts");
const game_schema_1 = __webpack_require__("./src/app/cpt/common/game/game.schema.ts");
let SettingsModule = class SettingsModule {
};
SettingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            settings_query_service_1.SettingsQueryService,
            settings_store_service_1.SettingsStoreService,
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.expenditureModel,
                modelSchema: settings_schema_1.expenditureSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.userAccountModel,
                modelSchema: account_schema_1.accountSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.purchaseModel,
                modelSchema: stocks_schema_1.StockPurchaseSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.stockItemModel,
                modelSchema: stocks_schema_1.stockItemSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.saleModel,
                modelSchema: stocks_schema_1.stockSaleSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.saleItemModel,
                modelSchema: stocks_schema_1.saleItemSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceItemModel,
                modelSchema: services_schema_1.serviceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.gameModel,
                modelSchema: game_schema_1.gameSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.todoModel,
                modelSchema: settings_schema_1.todoSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.staffPayModel,
                modelSchema: settings_schema_1.staffPaySchema,
            }),
        ],
        controllers: [
            settings_store_controller_1.SettingsStoreController,
            settings_query_controller_1.SettingsQueryController
        ]
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;


/***/ }),

/***/ "./src/app/cpt/common/settings/settings.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.staffPaySchema = exports.todoSchema = exports.expenditureSchema = exports.systemConfigSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
exports.systemConfigSchema = new mongoose_1.Schema({
    commissionRange: {
        type: String,
        required: true
    },
    serviceCommissions: {
        type: [Number],
        required: true,
    },
    printType: String
}, {
    timestamps: true
});
exports.expenditureSchema = new mongoose_1.Schema({
    expenseAmount: {
        type: Number,
        required: true
    },
    expenseRemark: {
        type: String,
        required: true
    },
    expenseDate: {
        type: Date,
        required: true
    },
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel
    }
}, { timestamps: true });
exports.todoSchema = new mongoose_1.Schema({
    todoNote: {
        type: String,
        required: true
    },
    todoDone: {
        type: Boolean,
        required: true,
        default: false
    },
    todoDoneAt: {
        type: Date,
        default: new Date(),
    },
    todoDoneBy: {
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
        type: mongoose_1.Types.ObjectId
    },
    userAccount: {
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
        type: mongoose_1.Types.ObjectId
    }
}, { timestamps: true });
exports.staffPaySchema = new mongoose_1.Schema({
    payAmount: {
        type: Number,
        required: true
    },
    staff: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
        required: true
    },
    payRemark: String,
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
    },
}, { timestamps: true });


/***/ }),

/***/ "./src/app/cpt/common/stocks/controllers/stocks-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const stocks_query_service_1 = __webpack_require__("./src/app/cpt/common/stocks/services/stocks-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let StocksQueryController = class StocksQueryController {
    constructor(stocksQueryService) {
        this.stocksQueryService = stocksQueryService;
    }
    getOverview(sDate, eDate) {
        return this.stocksQueryService.getOverview(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getPurchases(stockItemId) {
        if (stockItemId)
            return this.stocksQueryService.getStockItemPurchase(stockItemId);
        return this.stocksQueryService.getPurchases();
    }
    getSaleItems() {
        return this.stocksQueryService.getSaleItems();
    }
    // @Get(EInventoryStockQuery.allStocks)
    // getAllStocks() {
    //   return this.stocksQueryService.getAllStocks()
    // }
    getActiveStockItems(queryType) {
        return this.stocksQueryService.getActiveStocks(queryType);
    }
    getDashboardSale(sDate, eDate) {
        return this.stocksQueryService.getDashboardSale(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getOldStockItems() {
        return this.stocksQueryService.getOldStockItems();
    }
    getOutOfStock(osType) {
        return this.stocksQueryService.getOutOfStock(osType);
    }
    getPreviousVendors() {
        return this.stocksQueryService.getPreviousVendors();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOverview", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.stockPurchase),
    tslib_1.__param(0, (0, common_1.Query)('stockItemId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getPurchases", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ERmdDispensaryQuery.saleItems),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getSaleItems", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.activeStocks),
    tslib_1.__param(0, (0, common_1.Query)('query-type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getActiveStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ECinDispensaryQuery.dispenseHistory),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getDashboardSale", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.oldStocks),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOldStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.outOfStocks),
    tslib_1.__param(0, (0, common_1.Query)('os-type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOutOfStock", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.purchaseVendors),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getPreviousVendors", null);
StocksQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockQuery.stockQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stocks_query_service_1.StocksQueryService !== "undefined" && stocks_query_service_1.StocksQueryService) === "function" ? _a : Object])
], StocksQueryController);
exports.StocksQueryController = StocksQueryController;


/***/ }),

/***/ "./src/app/cpt/common/stocks/controllers/stocks-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const stocks_store_service_1 = __webpack_require__("./src/app/cpt/common/stocks/services/stocks-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let StocksStoreController = class StocksStoreController {
    constructor(stocksStoreService) {
        this.stocksStoreService = stocksStoreService;
    }
    savePurchase(purchase) {
        return this.stocksStoreService.savePurchase(purchase);
    }
    deleteStock(stockId) {
        return this.stocksStoreService.deleteStockItem(stockId);
    }
    sellStock(stock) {
        return this.stocksStoreService.sellStock(stock);
    }
    deleteSoldStock(stockId, batchId, type) {
        return this.stocksStoreService.deleteSoldStock(batchId, stockId, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EInventoryStockStore.stockPurchase),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IRmdStockPurchase !== "undefined" && lib_xUtils_1.IRmdStockPurchase) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "savePurchase", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EInventoryStockStore.stockPurchase + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "deleteStock", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ECinDispensaryStore.dispenseOrder),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IRmdSale !== "undefined" && lib_xUtils_1.IRmdSale) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "sellStock", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ECinDispensaryStore.returnSaleItems + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('batchId')),
    tslib_1.__param(2, (0, common_1.Query)('type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "deleteSoldStock", null);
StocksStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockStore.stockStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stocks_store_service_1.StocksStoreService !== "undefined" && stocks_store_service_1.StocksStoreService) === "function" ? _a : Object])
], StocksStoreController);
exports.StocksStoreController = StocksStoreController;


/***/ }),

/***/ "./src/app/cpt/common/stocks/services/stocks-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const date_fns_1 = __webpack_require__("date-fns");
let StocksQueryService = class StocksQueryService {
    constructor(stockItemModel, saleModel, systemConfigModel, purchaseModel, serviceRenderedModel, gamePlayedModel, expenditureModel, staffPayModel) {
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.systemConfigModel = systemConfigModel;
        this.purchaseModel = purchaseModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.gamePlayedModel = gamePlayedModel;
        this.expenditureModel = expenditureModel;
        this.staffPayModel = staffPayModel;
    }
    getOverview(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const totalSaleAmount = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const totalRenderedAmount = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems',
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        }
                    }
                }
            ]);
            const totalGameAmount = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'gameItems.deleted': false},
                            {
                                $or: [
                                    { 'gameItems.deleted': { $exists: false } },
                                    { 'gameItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const totalExpenseAmount = yield this.expenditureModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $match: {
                        'deleted': false,
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$expenseAmount',
                        },
                    }
                }
            ]);
            const saleByPayMethod = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$saleItems.payMethod',
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const serviceByPayMethod = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                            // {'serviceItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
            ]);
            const gamesByPayMethod = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const popularServices = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                            // {'serviceItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.serviceName',
                        count: {
                            $sum: '$serviceItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            }
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 5
                }
            ]);
            const totalPayoutAmount = yield this.staffPayModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $match: {
                        'deleted': false,
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$payAmount',
                        },
                    }
                }
            ]);
            return {
                totalSaleAmount: (totalSaleAmount === null || totalSaleAmount === void 0 ? void 0 : totalSaleAmount.length) ? totalSaleAmount[0] : {},
                totalRenderedAmount: (totalRenderedAmount === null || totalRenderedAmount === void 0 ? void 0 : totalRenderedAmount.length) ? totalRenderedAmount[0] : {},
                totalGameAmount: (totalGameAmount === null || totalGameAmount === void 0 ? void 0 : totalGameAmount.length) ? totalGameAmount[0] : {},
                totalExpenseAmount: (totalExpenseAmount === null || totalExpenseAmount === void 0 ? void 0 : totalExpenseAmount.length) ? totalExpenseAmount[0] : {},
                totalPayoutAmount: (totalPayoutAmount === null || totalPayoutAmount === void 0 ? void 0 : totalPayoutAmount.length) ? totalPayoutAmount[0] : {},
                saleByPayMethod,
                serviceByPayMethod,
                gamesByPayMethod,
                // popularStaff,
                popularServices
            };
        });
    }
    getPurchases() {
        return this.purchaseModel.find({}).sort({ createdAt: -1 })
            .populate([
            {
                path: 'itemsPurchased',
                model: cpt_db_model_1.ECptDbModels.stockItemModel,
            },
            {
                path: 'userAccount',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
        ;
    }
    getSaleItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.stockItemModel.aggregate([
                {
                    $match: {
                        quantity: {
                            $gte: 1
                        },
                    }
                },
                {
                    $sort: {
                        createdAt: -1
                    }
                },
                {
                    $group: {
                        _id: '$itemName',
                        id: {
                            $push: '$_id'
                        },
                        quantity: {
                            $sum: '$quantity'
                        },
                        itemName: {
                            $push: '$itemName'
                        },
                        unitCostPrice: {
                            $push: '$unitCostPrice'
                        },
                        unitSellingPrice: {
                            $push: '$unitSellingPrice'
                        },
                        createdAt: {
                            $push: '$createdAt'
                        },
                    }
                },
                {
                    $project: {
                        _id: {
                            $arrayElemAt: ['$id', 0]
                        },
                        itemName: {
                            $arrayElemAt: ['$itemName', 0]
                        },
                        quantity: '$quantity',
                        unitCostPrice: {
                            $arrayElemAt: ['$unitCostPrice', 0]
                        },
                        unitSellingPrice: {
                            $arrayElemAt: ['$unitSellingPrice', 0]
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0]
                        },
                        expiryDate: {
                            $arrayElemAt: ['$expiryDate', 0]
                        },
                    }
                }
            ]);
        });
    }
    // getAllStocks() {
    //   return this.stockItemModel.find({}).sort({itemName: 1})
    // }
    getActiveStocks(type = 'single') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'multiple')
                return this.stockItemModel.find({
                    quantity: {
                        $gte: 1
                    }
                }).sort({
                    itemName: 1,
                    createdAt: -1
                });
            else
                return this.stockItemModel.aggregate([
                    {
                        $match: {
                            quantity: {
                                $gte: 1
                            }
                        }
                    },
                    {
                        $sort: {
                            createdAt: -1
                        }
                    },
                    {
                        $group: {
                            _id: '$itemName',
                            id: {
                                $push: '$_id'
                            },
                            quantity: {
                                $sum: '$quantity'
                            },
                            itemName: {
                                $push: '$itemName'
                            },
                            unitCostPrice: {
                                $push: '$unitCostPrice'
                            },
                            unitSellingPrice: {
                                $push: '$unitSellingPrice'
                            },
                            createdAt: {
                                $push: '$createdAt'
                            },
                            expiryDate: {
                                $push: '$expiryDate'
                            }
                        }
                    },
                    {
                        $project: {
                            _id: {
                                $arrayElemAt: ['$id', 0]
                            },
                            itemName: {
                                $arrayElemAt: ['$itemName', 0]
                            },
                            quantity: '$quantity',
                            unitCostPrice: {
                                $arrayElemAt: ['$unitCostPrice', 0]
                            },
                            unitSellingPrice: {
                                $arrayElemAt: ['$unitSellingPrice', 0]
                            },
                            createdAt: {
                                $arrayElemAt: ['$createdAt', 0]
                            },
                            expiryDate: {
                                $arrayElemAt: ['$expiryDate', 0]
                            },
                        }
                    },
                    {
                        $sort: {
                            itemName: 1
                        }
                    }
                ]);
        });
    }
    getStockItemPurchase(stockItemId) {
        return this.purchaseModel.findOne({
            itemsPurchased: stockItemId
        })
            .populate([
            {
                path: 'itemsPurchased',
                model: cpt_db_model_1.ECptDbModels.stockItemModel,
            },
            {
                path: 'userAccount',
                model: cpt_db_model_1.ECptDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
    }
    getOldStockItems() {
        return this.stockItemModel.aggregate([
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $group: {
                    _id: '$itemName',
                    unitCostPrice: { $addToSet: '$unitCostPrice' },
                    unitSellingPrice: { $addToSet: '$unitSellingPrice' },
                },
            },
            {
                $project: {
                    _id: '$_id',
                    unitCostPrice: { $arrayElemAt: ['$unitCostPrice', 0] },
                    unitSellingPrice: { $arrayElemAt: ['$unitSellingPrice', 0] },
                },
            },
        ]);
    }
    getOutOfStock(osType) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const outOfStocks = [];
            const sales = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, date_fns_1.subWeeks)(new Date(), 6),
                        },
                    },
                },
                {
                    $unwind: '$saleItems',
                },
                {
                    $group: {
                        _id: '$saleItems.itemName',
                        quantity: { $push: '$saleItems.quantity' }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        quantity: {
                            $add: [{ $toInt: { $avg: '$quantity' } }, 1]
                        }
                    }
                }
            ]);
            for (let i = 0; i < sales.length; i++) {
                const stockItem = yield this.stockItemModel.aggregate([
                    {
                        $match: {
                            itemName: (_a = sales[i]) === null || _a === void 0 ? void 0 : _a._id,
                        },
                    },
                    {
                        $sort: {
                            createdAt: -1,
                        },
                    },
                    {
                        $group: {
                            _id: '$itemName',
                            quantity: { $sum: '$quantity' },
                            createdAt: { $push: '$createdAt' },
                            expiryDate: { $push: '$expiryDate' },
                            unitCostPrice: { $push: '$unitCostPrice' },
                        },
                    },
                    {
                        $match: {
                            quantity: osType == 'os'
                                ? { $lte: 0 }
                                : { $lte: (_b = sales[i]) === null || _b === void 0 ? void 0 : _b.quantity, $gt: 0 },
                        },
                    },
                    {
                        $project: {
                            _id: '$_id',
                            quantity: '$quantity',
                            expiryDate: { $arrayElemAt: ['$expiryDate', 0] },
                            createdAt: { $arrayElemAt: ['$createdAt', 0] },
                            unitCostPrice: { $avg: '$unitCostPrice' },
                        },
                    },
                ]);
                if (stockItem && stockItem.length) {
                    stockItem[0].avgCons = sales[0].quantity,
                        stockItem[0].avgCost =
                            stockItem[0].unitCostPrice * stockItem[0].avgCons;
                    outOfStocks.push(stockItem[0]);
                }
            }
            // console.log(osType, outOfStocks);
            return outOfStocks;
        });
    }
    getPreviousVendors() {
        return this.purchaseModel.aggregate([
            {
                $group: {
                    _id: '$vendor'
                }
            }
        ]);
    }
    getDashboardSale(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const saleByPayMethod = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$saleItems.payMethod',
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const saleTotal = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                        profit: {
                            $sum: {
                                $subtract: [
                                    '$saleItems.amount',
                                    {
                                        $multiply: [
                                            '$saleItems.unitCostPrice',
                                            '$saleItems.quantity',
                                        ],
                                    },
                                ],
                            }
                        }
                    }
                }
            ]);
            const sales = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $lookup: {
                        from: cpt_db_model_1.ECptDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'userAccount',
                        foreignField: '_id', as: 'userAccount'
                    }
                },
                {
                    $group: {
                        _id: '$saleItems._id',
                        invoiceId: { $push: '$invoiceId' },
                        batchId: { $push: '$_id' },
                        itemName: { $push: '$saleItems.itemName' },
                        itemId: { $push: '$saleItems.itemId' },
                        quantity: { $push: '$saleItems.quantity' },
                        payMethod: { $push: '$saleItems.payMethod' },
                        unitCostPrice: { $push: '$saleItems.unitCostPrice' },
                        unitSellingPrice: { $push: '$saleItems.unitSellingPrice' },
                        amount: { $push: '$saleItems.amount' },
                        userAccount: {
                            $push: '$userAccount.firstName'
                        },
                        createdAt: { $push: '$createdAt' },
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        invoiceId: { $arrayElemAt: ['$invoiceId', -1] },
                        batchId: { $arrayElemAt: ['$batchId', -1] },
                        itemName: { $arrayElemAt: ['$itemName', -1] },
                        itemId: { $arrayElemAt: ['$itemId', -1] },
                        quantity: { $arrayElemAt: ['$quantity', -1] },
                        unitCostPrice: { $arrayElemAt: ['$unitCostPrice', -1] },
                        unitSellingPrice: { $arrayElemAt: ['$unitSellingPrice', -1] },
                        amount: { $arrayElemAt: ['$amount', -1] },
                        payMethod: { $arrayElemAt: ['$payMethod', -1] },
                        userAccount: { $arrayElemAt: [{ $arrayElemAt: ['$userAccount', -1] }, -1] },
                        createdAt: { $arrayElemAt: ['$createdAt', -1] },
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                }
            ]);
            return {
                main: (saleTotal === null || saleTotal === void 0 ? void 0 : saleTotal.length) ? saleTotal[0] : {},
                byPayMethod: saleByPayMethod,
                sales
            };
        });
    }
};
StocksQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.saleModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.systemConfigModel)),
    tslib_1.__param(3, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.purchaseModel)),
    tslib_1.__param(4, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.serviceRenderedModel)),
    tslib_1.__param(5, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.gamePlayedModel)),
    tslib_1.__param(6, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.expenditureModel)),
    tslib_1.__param(7, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object, typeof (_f = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _f : Object, typeof (_g = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _g : Object, typeof (_h = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _h : Object])
], StocksQueryService);
exports.StocksQueryService = StocksQueryService;


/***/ }),

/***/ "./src/app/cpt/common/stocks/services/stocks-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const date_fns_1 = __webpack_require__("date-fns");
let StocksStoreService = class StocksStoreService {
    constructor(stockItemModel, purchaseModel, saleModel, cls) {
        this.stockItemModel = stockItemModel;
        this.purchaseModel = purchaseModel;
        this.saleModel = saleModel;
        this.cls = cls;
    }
    savePurchase(purchase) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (purchase === null || purchase === void 0 ? void 0 : purchase.id) {
                const items = [];
                const stockItemsToEdit = purchase.itemsPurchased.filter((item) => item === null || item === void 0 ? void 0 : item.id);
                const stockItemsToCreate = purchase.itemsPurchased.filter((item) => !(item === null || item === void 0 ? void 0 : item.id));
                if (stockItemsToCreate === null || stockItemsToCreate === void 0 ? void 0 : stockItemsToCreate.length) {
                    const itemsToCreate = yield this.stockItemModel.create(stockItemsToCreate);
                    console.log(itemsToCreate);
                    return;
                    itemsToCreate === null || itemsToCreate === void 0 ? void 0 : itemsToCreate.forEach((item) => {
                        delete item['id'];
                        items.push(item._id);
                    });
                }
                if (stockItemsToEdit === null || stockItemsToEdit === void 0 ? void 0 : stockItemsToEdit.length) {
                    for (let i = 0; i < stockItemsToEdit.length; i++) {
                        const itemToEdit = yield this.stockItemModel.findByIdAndUpdate((_a = stockItemsToEdit[i]) === null || _a === void 0 ? void 0 : _a.id, stockItemsToEdit[i], {
                            new: true
                        });
                        itemToEdit ? items.push(itemToEdit === null || itemToEdit === void 0 ? void 0 : itemToEdit._id) : null;
                    }
                }
                purchase.userAccount = this.cls.get('contextUser._id');
                purchase.itemsPurchased = items;
                return this.purchaseModel
                    .findByIdAndUpdate(purchase.id, purchase, {
                    new: true,
                })
                    .populate([
                    {
                        path: 'itemsPurchased',
                        model: cpt_db_model_1.ECptDbModels.stockItemModel,
                    },
                    {
                        path: 'userAccount',
                        model: cpt_db_model_1.ECptDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            else {
                const purchaseExist = yield this.purchaseModel.find({
                    vendor: purchase.vendor,
                    itemsPurchased: { $size: purchase.itemsPurchased.length },
                    createdAt: {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date())
                    }
                });
                if (purchaseExist) {
                    for (let i = 0; i < purchaseExist.length; i++) {
                        const minuteDiff = (0, date_fns_1.differenceInMinutes)(new Date(), new Date(purchaseExist[i].createdAt));
                        console.log(minuteDiff, purchaseExist[i].createdAt);
                        if (minuteDiff < 10) {
                            throw new common_1.BadRequestException("This is likely a duplicate, please try again in next "
                                + (10 - minuteDiff) + ' minutes.');
                        }
                    }
                    // console.log(purchaseExist, timeNow);
                }
                (_b = purchase.itemsPurchased) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
                    delete item['id'];
                });
                const itemItems = yield this.stockItemModel.create(purchase.itemsPurchased);
                // console.log(purchase.itemsPurchased);
                // return purchase.itemsPurchased;
                // console.log(itemItems);
                // return purchase.itemsPurchased;
                purchase.itemsPurchased = itemItems.map((item) => item === null || item === void 0 ? void 0 : item._id);
                purchase.userAccount = this.cls.get('contextUser._id');
                return (yield this.purchaseModel.create(purchase)).populate([
                    {
                        path: 'itemsPurchased',
                        model: cpt_db_model_1.ECptDbModels.stockItemModel,
                    },
                    {
                        path: 'userAccount',
                        model: cpt_db_model_1.ECptDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            ;
        });
    }
    saveStockItem(stock) {
        if (stock === null || stock === void 0 ? void 0 : stock._id) {
            return this.stockItemModel.findByIdAndUpdate(stock._id, stock, { new: true });
        }
        else {
            return this.stockItemModel.create(stock);
        }
    }
    deleteStockItem(itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stock = yield this.stockItemModel.deleteById(itemId, this.cls.get('contextUser._id'));
            if (stock === null || stock === void 0 ? void 0 : stock.modifiedCount)
                return this.stockItemModel.find({});
        });
    }
    sellStock(stockSale) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const saleItemsNames = stockSale.saleItems.map((item) => item.itemName);
            // console.log(stockSale);
            // return
            const items = yield this.stockItemModel.aggregate([
                {
                    $match: {
                        quantity: { $gte: 1 },
                        itemName: { $in: saleItemsNames },
                    },
                },
                {
                    $sort: {
                        createdAt: 1,
                    },
                },
                {
                    $group: {
                        _id: '$_id',
                        itemName: { $addToSet: '$itemName' },
                        quantity: { $sum: '$quantity' },
                        createdAt: { $addToSet: '$createdAt' },
                    },
                },
                {
                    $project: {
                        _id: '$_id',
                        itemName: {
                            $arrayElemAt: ['$itemName', 0],
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0],
                        },
                        quantity: '$quantity'
                    }
                },
                {
                    $sort: {
                        createdAt: 1,
                        itemName: 1,
                    }
                }
            ]);
            let stockItems = [];
            stockSale.saleItems.forEach((item) => {
                let qttyInputted = parseInt(item.quantity);
                const totQttyAvail = items.filter((itm) => itm.itemName == item.itemName).reduce((tot, cur) => tot + cur.quantity, 0);
                if (qttyInputted > totQttyAvail) {
                    throw new common_1.ConflictException(item.itemName + 'remains ' + totQttyAvail);
                }
                const itemVariants = items.filter((itm) => itm.itemName == item.itemName)
                    .sort((a, b) => new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? -1 : 1);
                let qttyToDeduct = qttyInputted;
                itemVariants.forEach((itm) => {
                    if (itm.quantity >= qttyInputted) {
                        qttyToDeduct = qttyInputted;
                        qttyInputted -= qttyToDeduct;
                    }
                    else {
                        qttyToDeduct = itm.quantity;
                        qttyInputted -= qttyToDeduct;
                    }
                    if (qttyToDeduct > 0) {
                        stockItems.push({
                            itemId: itm._id,
                            itemName: itm.itemName,
                            quantity: qttyToDeduct,
                            unitCostPrice: item.unitCostPrice,
                            unitSellingPrice: item.unitSellingPrice,
                            amount: qttyToDeduct * item.unitSellingPrice,
                            payMethod: item.payMethod
                        });
                    }
                });
            });
            stockSale.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
            stockSale.userAccount = (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id;
            stockSale.saleItems = stockItems;
            const sale = yield this.saleModel.create(stockSale);
            if (sale._id) {
                for (let i = 0; i < ((_b = sale.saleItems) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    yield this.stockItemModel.findByIdAndUpdate(sale.saleItems[i].itemId, {
                        $inc: {
                            quantity: -((_c = sale.saleItems[i]) === null || _c === void 0 ? void 0 : _c.quantity)
                        }
                    });
                }
            }
            return sale;
        });
    }
    deleteSoldStock(batchId, stockId, type) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'single') {
                const deletion = yield this.saleModel.findOneAndUpdate({
                    'saleItems._id': { $in: [stockId] }
                }, {
                    $set: {
                        'saleItems.$.deleted': true,
                        'saleItems.$.deletedBy': this.cls.get('contextUser._id'),
                        'saleItems.$.deletedAt': new Date(),
                    }
                }, {
                    new: true,
                    strict: false,
                    strictQuery: false
                });
                if (!deletion)
                    throw new Error("Error, item can not be deleted.");
                const deleteItem = (_a = deletion === null || deletion === void 0 ? void 0 : deletion.saleItems) === null || _a === void 0 ? void 0 : _a.find((item) => item._id.toString() == stockId && new mongoose_1.Types.ObjectId(item.deleted));
                // console.log(deleteItem);
                let returnQtty;
                if (deleteItem) {
                    returnQtty = yield this.stockItemModel.findByIdAndUpdate(deleteItem.itemId, {
                        $inc: {
                            quantity: deleteItem.quantity
                        }
                    }, { new: true });
                }
                return returnQtty ? deleteItem : null;
                // return this.saleModel.findByIdAndUpdate(batchId,
                //   {
                //     $pull: {saleItems: {_id: stockId}}
                //   },
                //   {
                //     new: true
                //   }
                // )
            }
            else {
                return this.saleModel.deleteById(batchId, this.cls.get('contextUser._id'));
                //.findByIdAndDelete({_id: batchId}, {new: true});
            }
        });
    }
};
StocksStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.purchaseModel)),
    tslib_1.__param(2, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.saleModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], StocksStoreService);
exports.StocksStoreService = StocksStoreService;


/***/ }),

/***/ "./src/app/cpt/common/stocks/stocks.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const stocks_store_controller_1 = __webpack_require__("./src/app/cpt/common/stocks/controllers/stocks-store.controller.ts");
const stocks_query_controller_1 = __webpack_require__("./src/app/cpt/common/stocks/controllers/stocks-query.controller.ts");
const stocks_store_service_1 = __webpack_require__("./src/app/cpt/common/stocks/services/stocks-store.service.ts");
const stocks_query_service_1 = __webpack_require__("./src/app/cpt/common/stocks/services/stocks-query.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const stocks_schema_1 = __webpack_require__("./src/app/cpt/common/stocks/stocks.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/cpt/common/settings/settings.schema.ts");
const services_schema_1 = __webpack_require__("./src/app/cpt/common/services/services.schema.ts");
const game_schema_1 = __webpack_require__("./src/app/cpt/common/game/game.schema.ts");
let StocksModule = class StocksModule {
};
StocksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [stocks_store_controller_1.StocksStoreController, stocks_query_controller_1.StocksQueryController],
        providers: [stocks_store_service_1.StocksStoreService, stocks_query_service_1.StocksQueryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.purchaseModel,
                modelSchema: stocks_schema_1.StockPurchaseSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.stockItemModel,
                modelSchema: stocks_schema_1.stockItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.saleModel,
                modelSchema: stocks_schema_1.stockSaleSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.saleItemModel,
                modelSchema: stocks_schema_1.saleItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.expenditureModel,
                modelSchema: settings_schema_1.expenditureSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.staffPayModel,
                modelSchema: settings_schema_1.staffPaySchema
            }),
        ],
    })
], StocksModule);
exports.StocksModule = StocksModule;


/***/ }),

/***/ "./src/app/cpt/common/stocks/stocks.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stockSaleSchema = exports.StockPurchaseSchema = exports.saleItemSchema = exports.stockItemSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
exports.stockItemSchema = new mongoose_1.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    unitCostPrice: {
        type: Number,
        required: true
    },
    unitSellingPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.saleItemSchema = new mongoose_1.Schema({
    itemId: {
        type: String,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitCostPrice: {
        type: Number,
        required: true,
    },
    unitSellingPrice: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    payMethod: String,
}, {
    timestamps: true
});
exports.StockPurchaseSchema = new mongoose_1.Schema({
    vendor: {
        type: String,
        required: true,
    },
    itemsPurchased: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: cpt_db_model_1.ECptDbModels.stockItemModel
        }
    ],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel,
    },
}, { timestamps: true });
exports.stockSaleSchema = new mongoose_1.Schema({
    invoiceId: String,
    saleItems: [exports.saleItemSchema],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: cpt_db_model_1.ECptDbModels.userAccountModel
    }
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/cpt/common/user-account/account.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
exports.accountSchema = new mongoose_1.Schema({
    acctType: {
        type: String,
        enum: ['Super', 'Standard', 'Basic']
    },
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    passWord: {
        type: String,
    },
    salt: String,
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/cpt/common/user-account/controllers/user-account-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_query_service_1 = __webpack_require__("./src/app/cpt/common/user-account/services/user-account-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountQueryController = class UserAccountQueryController {
    constructor(accountQueryService) {
        this.accountQueryService = accountQueryService;
    }
    login(body) {
        return this.accountQueryService.loginStaffAccount(body);
    }
    getUserAccounts() {
        return this.accountQueryService.getAccounts();
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EAccountQuery.staffProfileLogin),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountQueryController.prototype, "login", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Get)(lib_xUtils_1.EAccountQuery.staffProfiles),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountQueryController.prototype, "getUserAccounts", null);
UserAccountQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountQuery.accountQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_account_query_service_1.UserAccountQueryService !== "undefined" && user_account_query_service_1.UserAccountQueryService) === "function" ? _a : Object])
], UserAccountQueryController);
exports.UserAccountQueryController = UserAccountQueryController;


/***/ }),

/***/ "./src/app/cpt/common/user-account/controllers/user-account-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_store_service_1 = __webpack_require__("./src/app/cpt/common/user-account/services/user-account-store.service.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountStoreController = class UserAccountStoreController {
    constructor(accountStoreService) {
        this.accountStoreService = accountStoreService;
    }
    saveAccount(body) {
        return this.accountStoreService.saveAccount(body);
    }
    deleteAccount(accountId) {
        return this.accountStoreService.deleteAccount(accountId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EAccountStore.profile),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountStoreController.prototype, "saveAccount", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EAccountStore.profile + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountStoreController.prototype, "deleteAccount", null);
UserAccountStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountStore.accountStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_account_store_service_1.UserAccountStoreService !== "undefined" && user_account_store_service_1.UserAccountStoreService) === "function" ? _a : Object])
], UserAccountStoreController);
exports.UserAccountStoreController = UserAccountStoreController;


/***/ }),

/***/ "./src/app/cpt/common/user-account/services/user-account-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let UserAccountQueryService = class UserAccountQueryService {
    constructor(userAccountModel, accountService, jwtService, cls) {
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.jwtService = jwtService;
        this.cls = cls;
        this.accountService.accountModelCpt = this.userAccountModel;
        this.accountService.accountUserKey = 'email';
    }
    loginStaffAccount(staff) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userAccountModel.findOne({
                email: staff.email,
            });
            if (!user)
                throw new common_1.ForbiddenException('Invalid user credentials, please try again.');
            const userInfo = yield this.userAccountModel.findOne({
                _id: user === null || user === void 0 ? void 0 : user._id,
            }, { salt: 0, passWord: 0 });
            console.log(userInfo.email, ' Logged In!');
            return {
                token: this.jwtService.jwtSign(this.accountService.decryptAccountPassword(user, staff.passWord), 'email'),
                staff: userInfo,
            };
        });
    }
    getAccounts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
            return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
        });
    }
};
UserAccountQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof lib_serverConfig_1.JwtService !== "undefined" && lib_serverConfig_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], UserAccountQueryService);
exports.UserAccountQueryService = UserAccountQueryService;


/***/ }),

/***/ "./src/app/cpt/common/user-account/services/user-account-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let UserAccountStoreService = class UserAccountStoreService {
    constructor(userAccountModel, accountService, cls) {
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.cls = cls;
        this.accountService.accountModelCpt = this.userAccountModel;
    }
    saveAccount(accountForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (accountForm === null || accountForm === void 0 ? void 0 : accountForm._id) {
                const account = yield this.userAccountModel.findByIdAndUpdate(accountForm._id, this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id) {
                    const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                    return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
                    return this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                }
            }
            else {
                const account = yield this.userAccountModel.create(this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id) {
                    const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                    return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
                }
                // return this.userAccountModel.find({}, {salt: 0, passWord: 0});
            }
        });
    }
    deleteAccount(accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accountToDelete = yield this.userAccountModel.findById(accountId);
            if (accountToDelete.email == 'ibnadam.net@gmail.com')
                return;
            const account = yield this.userAccountModel.deleteById(accountId, this.cls.get('contextUser._id'));
            if (account === null || account === void 0 ? void 0 : account.modifiedCount)
                return this.userAccountModel.find({}, { salt: 0, passWord: 0 });
            throw new common_1.NotFoundException("Error occured, account not deleted please try again.");
        });
    }
};
UserAccountStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cpt_db_model_1.ECptDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], UserAccountStoreService);
exports.UserAccountStoreService = UserAccountStoreService;


/***/ }),

/***/ "./src/app/cpt/common/user-account/user-account.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_query_controller_1 = __webpack_require__("./src/app/cpt/common/user-account/controllers/user-account-query.controller.ts");
const user_account_store_controller_1 = __webpack_require__("./src/app/cpt/common/user-account/controllers/user-account-store.controller.ts");
const user_account_store_service_1 = __webpack_require__("./src/app/cpt/common/user-account/services/user-account-store.service.ts");
const user_account_query_service_1 = __webpack_require__("./src/app/cpt/common/user-account/services/user-account-query.service.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const cpt_db_model_1 = __webpack_require__("./src/app/cpt/cpt-db.model.ts");
const account_schema_1 = __webpack_require__("./src/app/cpt/common/user-account/account.schema.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountModule = class UserAccountModule {
};
UserAccountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [lib_nest_modules_1.AccountModule],
        controllers: [user_account_query_controller_1.UserAccountQueryController, user_account_store_controller_1.UserAccountStoreController],
        providers: [user_account_store_service_1.UserAccountStoreService, user_account_query_service_1.UserAccountQueryService,
            (0, db_providers_1.modelProvider)({
                modelName: cpt_db_model_1.ECptDbModels.userAccountModel,
                modelSchema: account_schema_1.accountSchema
            })
        ],
    })
], UserAccountModule);
exports.UserAccountModule = UserAccountModule;


/***/ }),

/***/ "./src/app/cpt/cpt-db.model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECptDbModels = void 0;
var ECptDbModels;
(function (ECptDbModels) {
    ECptDbModels["userAccountModel"] = "CPT_UserAccount";
    ECptDbModels["systemConfigModel"] = "CPT_SystemConfig";
    ECptDbModels["stockItemModel"] = "CPT_StockItem";
    ECptDbModels["purchaseModel"] = "CPT_Purchase";
    ECptDbModels["saleModel"] = "CPT_Sale";
    ECptDbModels["saleItemModel"] = "CPT_SaleItem";
    ECptDbModels["serviceItemModel"] = "CPT_ServiceItem";
    ECptDbModels["serviceRenderedModel"] = "CPT_ServiceRendered";
    ECptDbModels["serviceRenderedItemModel"] = "CPT_ServiceRenderedItem";
    ECptDbModels["expenditureModel"] = "CPT_EXPENDITURE";
    ECptDbModels["gameModel"] = "CPT_GAME";
    ECptDbModels["gamePlayedModel"] = "CPT_GAME_PLAYED";
    ECptDbModels["todoModel"] = "CPT_TODO";
    ECptDbModels["staffPayModel"] = "CPT_SAFF_PAY";
})(ECptDbModels = exports.ECptDbModels || (exports.ECptDbModels = {}));


/***/ }),

/***/ "./src/app/cpt/cpt.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CptModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_module_1 = __webpack_require__("./src/app/cpt/common/user-account/user-account.module.ts");
const stocks_module_1 = __webpack_require__("./src/app/cpt/common/stocks/stocks.module.ts");
const settings_module_1 = __webpack_require__("./src/app/cpt/common/settings/settings-module.ts");
const services_module_1 = __webpack_require__("./src/app/cpt/common/services/services.module.ts");
const game_module_1 = __webpack_require__("./src/app/cpt/common/game/game.module.ts");
let CptModule = class CptModule {
};
CptModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_account_module_1.UserAccountModule,
            stocks_module_1.StocksModule,
            settings_module_1.SettingsModule,
            services_module_1.ServicesModule,
            game_module_1.GameModule,
        ]
    })
], CptModule);
exports.CptModule = CptModule;


/***/ }),

/***/ "./src/app/cpt/cpt.routing.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CptModuleRoute = void 0;
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const cpt_module_1 = __webpack_require__("./src/app/cpt/cpt.module.ts");
const user_account_module_1 = __webpack_require__("./src/app/cpt/common/user-account/user-account.module.ts");
const stocks_module_1 = __webpack_require__("./src/app/cpt/common/stocks/stocks.module.ts");
const settings_module_1 = __webpack_require__("./src/app/cpt/common/settings/settings-module.ts");
const services_module_1 = __webpack_require__("./src/app/cpt/common/services/services.module.ts");
const game_module_1 = __webpack_require__("./src/app/cpt/common/game/game.module.ts");
exports.CptModuleRoute = [
    {
        path: 'cpt',
        module: cpt_module_1.CptModule,
        children: [
            {
                path: lib_xUtils_1.EFeatureAppModule.GAME.toLowerCase(),
                module: game_module_1.GameModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.SERVICE.toLowerCase(),
                module: services_module_1.ServicesModule
            },
            {
                path: lib_xUtils_1.ECommonAppModule.Account.toLowerCase(),
                module: user_account_module_1.UserAccountModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.STOCK.toLowerCase(),
                module: stocks_module_1.StocksModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.Setting.toLowerCase(),
                module: settings_module_1.SettingsModule
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/dvt/common/account/account.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const account_store_controller_1 = __webpack_require__("./src/app/dvt/common/account/controllers/account-store.controller.ts");
const account_query_controller_1 = __webpack_require__("./src/app/dvt/common/account/controllers/account-query.controller.ts");
const account_query_service_1 = __webpack_require__("./src/app/dvt/common/account/services/account-query.service.ts");
const account_store_service_1 = __webpack_require__("./src/app/dvt/common/account/services/account-store.service.ts");
const account_schema_1 = __webpack_require__("./src/app/dvt/common/account/account.schema.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/dvt/common/settings/settings.schema.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountModule = class UserAccountModule {
};
UserAccountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [account_store_controller_1.AccountStoreController, account_query_controller_1.AccountQueryController],
        providers: [account_query_service_1.AccountQueryService, account_store_service_1.AccountStoreService, lib_nest_modules_1.FileManagerService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.userAccountModel,
                modelSchema: account_schema_1.accountSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopBranchModel,
                modelSchema: settings_schema_1.ShopBranchSchema
            })
        ],
    })
], UserAccountModule);
exports.UserAccountModule = UserAccountModule;


/***/ }),

/***/ "./src/app/dvt/common/account/account.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
exports.accountSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    passWord: {
        type: String,
        required: true
    },
    acctType: {
        type: String,
        required: true
    },
    shopBranch: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.shopBranchModel,
        required: true
    },
    avatar: {},
    salt: String,
});


/***/ }),

/***/ "./src/app/dvt/common/account/controllers/account-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const account_query_service_1 = __webpack_require__("./src/app/dvt/common/account/services/account-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let AccountQueryController = class AccountQueryController {
    constructor(accountQueryService) {
        this.accountQueryService = accountQueryService;
    }
    login(body) {
        return this.accountQueryService.loginStaffAccount(body);
    }
    getUserAccounts() {
        return this.accountQueryService.getAccounts();
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EAccountQuery.staffProfileLogin),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AccountQueryController.prototype, "login", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Get)(lib_xUtils_1.EAccountQuery.staffProfiles),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AccountQueryController.prototype, "getUserAccounts", null);
AccountQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountQuery.accountQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof account_query_service_1.AccountQueryService !== "undefined" && account_query_service_1.AccountQueryService) === "function" ? _a : Object])
], AccountQueryController);
exports.AccountQueryController = AccountQueryController;


/***/ }),

/***/ "./src/app/dvt/common/account/controllers/account-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const account_store_service_1 = __webpack_require__("./src/app/dvt/common/account/services/account-store.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let AccountStoreController = class AccountStoreController {
    constructor(accountStoreService) {
        this.accountStoreService = accountStoreService;
    }
    saveAccount(body) {
        return this.accountStoreService.saveAccount(body);
    }
    deleteAccount(accountId) {
        return this.accountStoreService.deleteAccount(accountId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EAccountStore.profile),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AccountStoreController.prototype, "saveAccount", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EAccountStore.profile + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], AccountStoreController.prototype, "deleteAccount", null);
AccountStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountStore.accountStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof account_store_service_1.AccountStoreService !== "undefined" && account_store_service_1.AccountStoreService) === "function" ? _a : Object])
], AccountStoreController);
exports.AccountStoreController = AccountStoreController;


/***/ }),

/***/ "./src/app/dvt/common/account/services/account-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let AccountQueryService = class AccountQueryService {
    constructor(userAccountModel, accountService, jwtService, cls) {
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.jwtService = jwtService;
        this.cls = cls;
        this.accountService.accountModelDvt = userAccountModel;
    }
    loginStaffAccount(staff) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userAccountModel.findOne({
                userName: staff.userName,
            });
            if (!user)
                throw new common_1.ForbiddenException('Invalid user credentials, please try again.');
            const userInfo = yield this.userAccountModel.findOne({
                _id: user === null || user === void 0 ? void 0 : user._id,
            }, { salt: 0, passWord: 0 }).populate([
                {
                    model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                    path: 'shopBranch',
                    select: 'branchName',
                    options: { withDeleted: true }
                }
            ]);
            return {
                token: this.jwtService.jwtSign(this.accountService.decryptAccountPassword(user, staff.passWord), 'shopBranch', 'email'),
                staff: userInfo,
            };
        });
    }
    getAccounts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 }).populate([
                {
                    path: 'shopBranch',
                    model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                    select: 'branchName',
                    options: { withDeleted: true },
                }
            ]);
            return accounts;
            // .filter((account)=>account.email !== 'ibnadam.net@gmail.com')
        });
    }
};
AccountQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof lib_serverConfig_1.JwtService !== "undefined" && lib_serverConfig_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], AccountQueryService);
exports.AccountQueryService = AccountQueryService;


/***/ }),

/***/ "./src/app/dvt/common/account/services/account-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let AccountStoreService = class AccountStoreService {
    constructor(shopBranchModel, userAccountModel, accountService, fileManagerService) {
        this.shopBranchModel = shopBranchModel;
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.fileManagerService = fileManagerService;
        this.accountService.accountModelDvt = this.userAccountModel;
    }
    saveAccount(accountForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.fileManagerService.model = this.userAccountModel;
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: accountForm.shopBranch });
            accountForm.shopBranch = shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id;
            if (accountForm === null || accountForm === void 0 ? void 0 : accountForm._id) {
                const account = yield this.userAccountModel.findByIdAndUpdate(accountForm._id, this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id)
                    return this.userAccountModel.find({}, { salt: 0, passWord: 0 }).populate([
                        {
                            path: 'shopBranch',
                            model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                            select: 'branchName',
                            options: { withDeleted: true },
                        }
                    ]);
            }
            else {
                const account = yield this.userAccountModel.create(this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id)
                    return this.userAccountModel.find({}, { salt: 0, passWord: 0 }).populate([
                        {
                            path: 'shopBranch',
                            model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                            select: 'branchName',
                            options: { withDeleted: true },
                        }
                    ]);
            }
        });
    }
    deleteAccount(accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accountToDelete = yield this.userAccountModel.findById(accountId);
            if (accountToDelete.email == 'ibnadam.net@gmail.com')
                return;
            const account = yield this.userAccountModel.findByIdAndDelete(accountId, { new: true });
            if (account === null || account === void 0 ? void 0 : account._id)
                return this.userAccountModel.find({}, { salt: 0, passWord: 0 });
            throw new common_1.NotFoundException("Error occured, account not deleted please try again.");
        });
    }
};
AccountStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _c : Object, typeof (_d = typeof lib_nest_modules_1.FileManagerService !== "undefined" && lib_nest_modules_1.FileManagerService) === "function" ? _d : Object])
], AccountStoreService);
exports.AccountStoreService = AccountStoreService;


/***/ }),

/***/ "./src/app/dvt/common/settings/controllers/settings-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const settings_query_service_1 = __webpack_require__("./src/app/dvt/common/settings/services/settings-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsQueryController = class SettingsQueryController {
    constructor(settingsQueryService) {
        this.settingsQueryService = settingsQueryService;
    }
    getShopBranches() {
        return this.settingsQueryService.getShopBranches();
    }
    getShopExpenditures(sDate, eDate, shopBranch) {
        return this.settingsQueryService.getShopExpenditures(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'), shopBranch);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.shopBranch),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getShopBranches", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.expenditure),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__param(2, (0, common_1.Query)('shopBranch')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getShopExpenditures", null);
SettingsQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsQuery.settingsQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_query_service_1.SettingsQueryService !== "undefined" && settings_query_service_1.SettingsQueryService) === "function" ? _a : Object])
], SettingsQueryController);
exports.SettingsQueryController = SettingsQueryController;


/***/ }),

/***/ "./src/app/dvt/common/settings/controllers/settings-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const settings_store_service_1 = __webpack_require__("./src/app/dvt/common/settings/services/settings-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsStoreController = class SettingsStoreController {
    constructor(settingsStoreService) {
        this.settingsStoreService = settingsStoreService;
    }
    saveShopBranch(branch) {
        return this.settingsStoreService.saveShopBranch(branch);
    }
    assignToShop(shopBranchId) {
        return this.settingsStoreService.asignToShop(shopBranchId);
    }
    save(expense) {
        return this.settingsStoreService.saveShopExpenditure(expense);
    }
    deleteBranch(branchId) {
        return this.settingsStoreService.deleteShopBranch(branchId);
    }
    deleteExpenditure(expenseId) {
        return this.settingsStoreService.deleteExpenditure(expenseId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.shopBranch),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IShopBranch !== "undefined" && lib_xUtils_1.IShopBranch) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveShopBranch", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Put)(lib_xUtils_1.ESettingsStore.shopBranch + '/:id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "assignToShop", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.expenditure),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IVetExpenditure !== "undefined" && lib_xUtils_1.IVetExpenditure) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "save", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.shopBranch + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteBranch", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.expenditure + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteExpenditure", null);
SettingsStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsStore.settingsStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_store_service_1.SettingsStoreService !== "undefined" && settings_store_service_1.SettingsStoreService) === "function" ? _a : Object])
], SettingsStoreController);
exports.SettingsStoreController = SettingsStoreController;


/***/ }),

/***/ "./src/app/dvt/common/settings/services/settings-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const mongoose_1 = __webpack_require__("mongoose");
let SettingsQueryService = class SettingsQueryService {
    constructor(shopBranchModel, shopExpenditureModel) {
        this.shopBranchModel = shopBranchModel;
        this.shopExpenditureModel = shopExpenditureModel;
    }
    getShopBranches() {
        return this.shopBranchModel.find({});
    }
    getShopExpenditures(sDate, eDate, branch) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: branch });
            if (shopBranch)
                return this.shopExpenditureModel.find({
                    shopBranch: new mongoose_1.Types.ObjectId(shopBranch._id),
                    expenseDate: {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate)),
                    }
                }).populate([
                    {
                        path: 'shopBranch',
                        model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                        select: 'branchName',
                        options: { withDeleted: true },
                    },
                    {
                        path: 'userAccount',
                        model: dvt_db_model_1.EVetDbModels.userAccountModel,
                        select: 'userName firstName surName',
                        options: { withDeleted: true },
                    },
                ]);
            return this.shopExpenditureModel.find({
                expenseDate: {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate)),
                }
            }).populate([
                {
                    path: 'shopBranch',
                    model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                    select: 'branchName',
                    options: { withDeleted: true },
                },
                {
                    path: 'userAccount',
                    model: dvt_db_model_1.EVetDbModels.userAccountModel,
                    select: 'userName firstName surName',
                    options: { withDeleted: true },
                },
            ]);
        });
    }
};
SettingsQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopExpenditureModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object])
], SettingsQueryService);
exports.SettingsQueryService = SettingsQueryService;


/***/ }),

/***/ "./src/app/dvt/common/settings/services/settings-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let SettingsStoreService = class SettingsStoreService {
    constructor(shopBranchModel, shopExpenditureModel, cls, stockItemModel, purchaseModel, saleModel) {
        this.shopBranchModel = shopBranchModel;
        this.shopExpenditureModel = shopExpenditureModel;
        this.cls = cls;
        this.stockItemModel = stockItemModel;
        this.purchaseModel = purchaseModel;
        this.saleModel = saleModel;
    }
    saveShopBranch(branch) {
        if (branch === null || branch === void 0 ? void 0 : branch._id) {
            return this.shopBranchModel.findByIdAndUpdate(branch._id, branch, {
                new: true
            });
        }
        else {
            return this.shopBranchModel.create(branch);
        }
    }
    saveShopExpenditure(expense) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: expense.shopBranch });
            expense.userAccount = this.cls.get('contextUser._id');
            expense.shopBranch = shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id;
            return this.shopExpenditureModel.create(expense);
        });
    }
    asignToShop(branchId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findById(branchId);
            const updateAllPurchases = yield this.purchaseModel.updateMany({}, {
                $set: {
                    shopBranch: shopBranch._id
                }
            });
            const updateAllStockItems = yield this.stockItemModel.updateMany({}, {
                $set: {
                    shopBranch: shopBranch._id
                }
            });
            const updateAllSales = yield this.saleModel.updateMany({}, {
                $set: {
                    shopBranch: shopBranch._id
                }
            });
            return {
                updateAllPurchases,
                updateAllStockItems,
                updateAllSales
            };
        });
    }
    deleteShopBranch(branchId) {
        return this.shopBranchModel.findByIdAndDelete(branchId, { new: true });
    }
    deleteExpenditure(expenseId) {
        return this.shopExpenditureModel.findByIdAndDelete(expenseId, { new: true });
    }
};
SettingsStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopExpenditureModel)),
    tslib_1.__param(3, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__param(4, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.purchaseModel)),
    tslib_1.__param(5, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.saleModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object, typeof (_f = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _f : Object])
], SettingsStoreService);
exports.SettingsStoreService = SettingsStoreService;


/***/ }),

/***/ "./src/app/dvt/common/settings/settings-module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const settings_query_service_1 = __webpack_require__("./src/app/dvt/common/settings/services/settings-query.service.ts");
const settings_store_service_1 = __webpack_require__("./src/app/dvt/common/settings/services/settings-store.service.ts");
const settings_store_controller_1 = __webpack_require__("./src/app/dvt/common/settings/controllers/settings-store.controller.ts");
const settings_query_controller_1 = __webpack_require__("./src/app/dvt/common/settings/controllers/settings-query.controller.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/dvt/common/settings/settings.schema.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const inventory_schema_1 = __webpack_require__("./src/app/dvt/core/inventory/inventory.schema.ts");
const dispensary_schema_1 = __webpack_require__("./src/app/dvt/core/dispensary/dispensary.schema.ts");
let SettingsModule = class SettingsModule {
};
SettingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            settings_query_service_1.SettingsQueryService,
            settings_store_service_1.SettingsStoreService,
            (0, db_providers_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopBranchModel,
                modelSchema: settings_schema_1.ShopBranchSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopExpenditureModel,
                modelSchema: settings_schema_1.ShopExpenditureSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.stockItemModel,
                modelSchema: inventory_schema_1.StockItemSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.saleModel,
                modelSchema: dispensary_schema_1.saleSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.purchaseModel,
                modelSchema: inventory_schema_1.StockPurchaseSchema,
            }),
        ],
        controllers: [
            settings_store_controller_1.SettingsStoreController,
            settings_query_controller_1.SettingsQueryController
        ]
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;


/***/ }),

/***/ "./src/app/dvt/common/settings/settings.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopExpenditureSchema = exports.ShopBranchSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
exports.ShopBranchSchema = new mongoose_1.Schema({
    branchName: {
        required: true,
        type: String,
        unique: true
    },
    branchLocation: String,
    branchContact: String
}, {
    timestamps: true
});
exports.ShopExpenditureSchema = new mongoose_1.Schema({
    expenseAmount: {
        type: Number,
        required: true
    },
    expenseRemark: {
        type: String,
        required: true
    },
    expenseDate: {
        type: Date,
        required: true
    },
    shopBranch: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.shopBranchModel,
        required: true
    },
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.userAccountModel
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/dvt/core/dispensary/controllers/dispensary-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispensaryQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const dispensary_query_service_1 = __webpack_require__("./src/app/dvt/core/dispensary/services/dispensary-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let DispensaryQueryController = class DispensaryQueryController {
    constructor(dispensaryQueryService) {
        this.dispensaryQueryService = dispensaryQueryService;
    }
    getSaleItems(branch) {
        // console.log('Query ', branch);
        return this.dispensaryQueryService.getSaleItems(branch);
    }
    getSalesHistory(date, branch) {
        return this.dispensaryQueryService.getSalesHistory(JSON.parse(date), branch);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EVetDispensaryQuery.saleItems),
    tslib_1.__param(0, (0, common_1.Query)('branch')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DispensaryQueryController.prototype, "getSaleItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EVetDispensaryQuery.saleHistory),
    tslib_1.__param(0, (0, common_1.Query)('date')),
    tslib_1.__param(1, (0, common_1.Query)('branch')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DispensaryQueryController.prototype, "getSalesHistory", null);
DispensaryQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EVetDispensaryQuery.dispensaryQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dispensary_query_service_1.DispensaryQueryService !== "undefined" && dispensary_query_service_1.DispensaryQueryService) === "function" ? _a : Object])
], DispensaryQueryController);
exports.DispensaryQueryController = DispensaryQueryController;


/***/ }),

/***/ "./src/app/dvt/core/dispensary/controllers/dispensary-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispensaryStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const dispensary_store_service_1 = __webpack_require__("./src/app/dvt/core/dispensary/services/dispensary-store.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let DispensaryStoreController = class DispensaryStoreController {
    constructor(dispensaryStoreService) {
        this.dispensaryStoreService = dispensaryStoreService;
    }
    saveSale(sale) {
        return this.dispensaryStoreService.saveSale(sale);
    }
    DeleteSaleItem(soldItemId, itemId) {
        return this.dispensaryStoreService.deleteSaleItem(soldItemId, itemId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Post)(lib_xUtils_1.EVetDispensaryStore.sale),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IVetSale !== "undefined" && lib_xUtils_1.IVetSale) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DispensaryStoreController.prototype, "saveSale", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EVetDispensaryStore.sale + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('itemId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], DispensaryStoreController.prototype, "DeleteSaleItem", null);
DispensaryStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EVetDispensaryStore.dispensaryStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dispensary_store_service_1.DispensaryStoreService !== "undefined" && dispensary_store_service_1.DispensaryStoreService) === "function" ? _a : Object])
], DispensaryStoreController);
exports.DispensaryStoreController = DispensaryStoreController;


/***/ }),

/***/ "./src/app/dvt/core/dispensary/dispensary.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispensaryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dispensary_store_controller_1 = __webpack_require__("./src/app/dvt/core/dispensary/controllers/dispensary-store.controller.ts");
const dispensary_query_controller_1 = __webpack_require__("./src/app/dvt/core/dispensary/controllers/dispensary-query.controller.ts");
const dispensary_store_service_1 = __webpack_require__("./src/app/dvt/core/dispensary/services/dispensary-store.service.ts");
const dispensary_query_service_1 = __webpack_require__("./src/app/dvt/core/dispensary/services/dispensary-query.service.ts");
const inventory_schema_1 = __webpack_require__("./src/app/dvt/core/inventory/inventory.schema.ts");
const dispensary_schema_1 = __webpack_require__("./src/app/dvt/core/dispensary/dispensary.schema.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/dvt/common/settings/settings.schema.ts");
let DispensaryModule = class DispensaryModule {
};
DispensaryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [dispensary_store_controller_1.DispensaryStoreController, dispensary_query_controller_1.DispensaryQueryController],
        providers: [
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.stockItemModel,
                modelSchema: inventory_schema_1.StockItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.saleModel,
                modelSchema: dispensary_schema_1.saleSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.saleItemModel,
                modelSchema: dispensary_schema_1.saleItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopBranchModel,
                modelSchema: settings_schema_1.ShopBranchSchema
            }),
            dispensary_store_service_1.DispensaryStoreService, dispensary_query_service_1.DispensaryQueryService,
        ]
    })
], DispensaryModule);
exports.DispensaryModule = DispensaryModule;


/***/ }),

/***/ "./src/app/dvt/core/dispensary/dispensary.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saleSchema = exports.saleItemSchema = void 0;
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
exports.saleItemSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        ref: lib_dbConfig_1.EVetModelProvider.stockItemModel
    },
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantityRemaining: Number,
    unitCostPrice: {
        type: Number,
        required: true
    },
    unitSellingPrice: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    deleted: Boolean
}, {
    timestamps: true
});
exports.saleSchema = new mongoose_1.Schema({
    invoiceNo: String,
    payMethod: {
        type: String,
        required: true
    },
    shopBranch: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.shopBranchModel,
        required: true
    },
    saleItems: [exports.saleItemSchema],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: lib_dbConfig_1.EVetModelProvider.userAccountModel
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/dvt/core/dispensary/services/dispensary-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispensaryQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const common_1 = __webpack_require__("@nestjs/common");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let DispensaryQueryService = class DispensaryQueryService {
    constructor(stockItemModel, saleModel, shopBranchModel) {
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.shopBranchModel = shopBranchModel;
    }
    getSaleItems(branch) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: branch });
            if (!shopBranch) {
                console.log('Error in verifying branch origin.', branch, ' = ', shopBranch);
                return;
            }
            const stockItems = yield this.stockItemModel.aggregate([
                {
                    $match: {
                        shopBranch: shopBranch._id,
                        quantity: {
                            $gte: 1
                        },
                        expiryDate: {
                            $gte: new Date()
                        }
                    }
                },
                {
                    $sort: {
                        createdAt: -1
                    }
                },
                {
                    $group: {
                        _id: '$itemName',
                        id: {
                            $push: '$_id'
                        },
                        quantity: {
                            $sum: '$quantity'
                        },
                        itemName: {
                            $push: '$itemName'
                        },
                        unitCostPrice: {
                            $push: '$unitCostPrice'
                        },
                        unitSellingPrice: {
                            $push: '$unitSellingPrice'
                        },
                        createdAt: {
                            $push: '$createdAt'
                        },
                        expiryDate: {
                            $push: '$expiryDate'
                        }
                    }
                },
                {
                    $project: {
                        _id: {
                            $arrayElemAt: ['$id', 0]
                        },
                        itemName: {
                            $arrayElemAt: ['$itemName', 0]
                        },
                        quantity: '$quantity',
                        unitCostPrice: {
                            $arrayElemAt: ['$unitCostPrice', 0]
                        },
                        unitSellingPrice: {
                            $arrayElemAt: ['$unitSellingPrice', 0]
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0]
                        },
                        expiryDate: {
                            $arrayElemAt: ['$expiryDate', 0]
                        },
                    }
                }
            ]);
            return stockItems;
            console.log(stockItems, stockItems.length);
        });
    }
    getSalesHistory(dates, branch) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: branch });
            if (branch && shopBranch) {
                return this.saleModel.find({
                    shopBranch: shopBranch._id,
                    createdAt: {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1]))
                    }
                }).sort({
                    createdAt: -1
                }).populate([
                    {
                        path: 'shopBranch',
                        model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                        select: 'branchName',
                        options: { withDeleted: true },
                    },
                    {
                        path: 'userAccount',
                        model: dvt_db_model_1.EVetDbModels.userAccountModel,
                        select: 'email userName firstName surName',
                        options: { withDeleted: true },
                    },
                    {
                        path: 'saleItems.deletedBy',
                        model: dvt_db_model_1.EVetDbModels.userAccountModel,
                        select: 'email userName firstName surName',
                        options: { withDeleted: true },
                    }
                ]);
            }
            return this.saleModel.find({
                createdAt: {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1]))
                }
            }).sort({
                createdAt: -1
            }).populate([
                {
                    path: 'shopBranch',
                    model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                    select: 'branchName',
                    options: { withDeleted: true },
                },
                {
                    path: 'userAccount',
                    model: dvt_db_model_1.EVetDbModels.userAccountModel,
                    select: 'email userName firstName surName',
                    options: { withDeleted: true },
                },
                {
                    path: 'saleItems.deletedBy',
                    model: dvt_db_model_1.EVetDbModels.userAccountModel,
                    select: 'email userName firstName surName',
                    options: { withDeleted: true },
                }
            ]);
        });
    }
};
DispensaryQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.saleModel)),
    tslib_1.__param(2, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], DispensaryQueryService);
exports.DispensaryQueryService = DispensaryQueryService;


/***/ }),

/***/ "./src/app/dvt/core/dispensary/services/dispensary-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispensaryStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const common_1 = __webpack_require__("@nestjs/common");
const date_fns_1 = __webpack_require__("date-fns");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let DispensaryStoreService = class DispensaryStoreService {
    constructor(saleModel, stockItemModel, cls) {
        this.saleModel = saleModel;
        this.stockItemModel = stockItemModel;
        this.cls = cls;
    }
    saveSale(sale) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const saleItemsNames = sale.saleItems.map((item) => item.itemName);
            const items = yield this.stockItemModel.aggregate([
                {
                    $match: {
                        shopBranch: new mongoose_1.Types.ObjectId(sale.shopBranch),
                        quantity: { $gte: 1 },
                        expiryDate: { $gte: new Date() },
                        itemName: { $in: saleItemsNames },
                    },
                },
                {
                    $sort: {
                        createdAt: 1,
                    },
                },
                {
                    $group: {
                        _id: '$_id',
                        itemName: { $addToSet: '$itemName' },
                        quantity: { $sum: '$quantity' },
                        createdAt: { $addToSet: '$createdAt' },
                    },
                },
                {
                    $project: {
                        _id: '$_id',
                        itemName: {
                            $arrayElemAt: ['$itemName', 0],
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0],
                        },
                        quantity: '$quantity'
                    }
                },
                {
                    $sort: {
                        createdAt: 1,
                        itemName: 1,
                    }
                }
            ]);
            let stockItems = [];
            sale.saleItems.forEach((item) => {
                let qttyInputted = parseInt(item.quantity);
                const totQttyAvail = items.filter((itm) => itm.itemName == item.itemName).reduce((tot, cur) => tot + cur.quantity, 0);
                // console.log(items);
                // return
                if (qttyInputted > totQttyAvail) {
                    // // console.log(qttyInputted, totQttyAvail);
                    // return
                    throw new common_1.ConflictException(item.itemName + ' remains ' + totQttyAvail //item.quantity,
                    );
                }
                const itemVariants = items.filter((itm) => itm.itemName == item.itemName)
                    .sort((a, b) => new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? -1 : 1);
                let qttyToDeduct = qttyInputted;
                itemVariants.forEach((itm) => {
                    if (itm.quantity >= qttyInputted) {
                        // itm.quantity -= qttyInputted
                        qttyToDeduct = qttyInputted;
                        qttyInputted -= qttyToDeduct;
                        // //
                        //   console.log(qttyToDeduct);
                        // qttyInputted = qttyInputted -
                    }
                    else {
                        qttyToDeduct = itm.quantity;
                        qttyInputted -= qttyToDeduct;
                    }
                    // console.log(itm.itemName, '=', itm.quantity, qttyToDeduct, itm.quantity - qttyToDeduct);
                    // return
                    if (qttyToDeduct > 0) {
                        stockItems.push({
                            id: itm._id,
                            itemName: itm.itemName,
                            quantity: qttyToDeduct,
                            quantityRemaining: itm.quantity - qttyToDeduct,
                            unitCostPrice: item.unitCostPrice,
                            unitSellingPrice: item.unitSellingPrice,
                            amount: qttyToDeduct * item.unitSellingPrice
                        });
                    }
                });
            });
            // return
            let invoiceSerial = yield this.saleModel.find({
                createdAt: {
                    $gte: (0, date_fns_1.startOfDay)(new Date()),
                    $lte: (0, date_fns_1.endOfDay)(new Date())
                }
            });
            invoiceSerial = invoiceSerial.length + 1;
            sale.saleItems = stockItems;
            sale.invoiceNo = (0, lib_xUtils_1.padNumber)(invoiceSerial, 3, '0');
            sale.userAccount = this.cls.get('contextUser._id');
            const saveSale = yield this.saleModel.create(sale);
            if (saveSale === null || saveSale === void 0 ? void 0 : saveSale._id) {
                for (let i = 0; i < stockItems.length; i++) {
                    yield this.stockItemModel.findOneAndUpdate({
                        _id: stockItems[i].id,
                        shopBranch: new mongoose_1.Types.ObjectId(sale.shopBranch)
                    }, {
                        $inc: {
                            quantity: -stockItems[i].quantity,
                        },
                    }, {
                        strict: true,
                    });
                }
            }
            return saveSale;
        });
    }
    deleteSaleItem(soldItemId, itemId) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deletion = yield this.saleModel.findOneAndUpdate({
                'saleItems._id': { $in: [soldItemId] }
            }, {
                $set: {
                    'saleItems.$.deleted': true,
                    'saleItems.$.deletedBy': this.cls.get('contextUser._id'),
                    'saleItems.$.deletedAt': new Date(),
                }
            }, {
                new: true,
                strict: false,
                strictQuery: false
            });
            if (!deletion)
                throw new Error("Error, item can not be deleted.");
            const deleteItem = (_a = deletion === null || deletion === void 0 ? void 0 : deletion.saleItems) === null || _a === void 0 ? void 0 : _a.find((item) => item._id.toString() == soldItemId && item.deleted);
            let returnQtty;
            if (deleteItem) {
                returnQtty = yield this.stockItemModel.findByIdAndUpdate(itemId, {
                    $inc: {
                        quantity: deleteItem.quantity
                    }
                }, { new: true });
            }
            return returnQtty ? deleteItem : null;
        });
    }
};
DispensaryStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.saleModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], DispensaryStoreService);
exports.DispensaryStoreService = DispensaryStoreService;


/***/ }),

/***/ "./src/app/dvt/core/inventory/controllers/dashboard.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const dashboard_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/dashboard.service.ts");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    dashboardOverview(sDate, eDate) {
        return this.dashboardService.getStoreWorth();
    }
    dashboardIncome(sDate, eDate) {
        return this.dashboardService.getIncome([JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}')]);
    }
    dashboardCharts(sDate, eDate, range) {
        return this.dashboardService.dashboardCharts([JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}')], range);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EVetDashboardQuery.overview),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardController.prototype, "dashboardOverview", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EVetDashboardQuery.income),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardController.prototype, "dashboardIncome", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EVetDashboardQuery.dashboard),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__param(2, (0, common_1.Query)('range')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardController.prototype, "dashboardCharts", null);
DashboardController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EVetDashboardQuery.dashboardQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dashboard_service_1.DashboardService !== "undefined" && dashboard_service_1.DashboardService) === "function" ? _a : Object])
], DashboardController);
exports.DashboardController = DashboardController;


/***/ }),

/***/ "./src/app/dvt/core/inventory/controllers/stock-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const stock_query_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/stock-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let StockQueryController = class StockQueryController {
    constructor(stockQueryService) {
        this.stockQueryService = stockQueryService;
    }
    getPurchases(stockItemId) {
        if (stockItemId)
            return this.stockQueryService.getStockItemPurchase(stockItemId);
        return this.stockQueryService.getPurchases();
    }
    getActiveStockItems(queryType, branch) {
        return this.stockQueryService.getActiveStocks(queryType, branch);
    }
    getOldStockItems() {
        return this.stockQueryService.getOldStockItems();
    }
    getOutOfStock(osType, branch) {
        return this.stockQueryService.getOutOfStock(osType, branch);
    }
    getPreviousVendors() {
        return this.stockQueryService.getPreviousVendors();
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.stockPurchase),
    tslib_1.__param(0, (0, common_1.Query)('stockItemId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StockQueryController.prototype, "getPurchases", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.activeStocks),
    tslib_1.__param(0, (0, common_1.Query)('query-type')),
    tslib_1.__param(1, (0, common_1.Query)('branch')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StockQueryController.prototype, "getActiveStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.oldStocks),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StockQueryController.prototype, "getOldStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.outOfStocks),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('branch')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StockQueryController.prototype, "getOutOfStock", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.purchaseVendors),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StockQueryController.prototype, "getPreviousVendors", null);
StockQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockQuery.stockQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stock_query_service_1.StockQueryService !== "undefined" && stock_query_service_1.StockQueryService) === "function" ? _a : Object])
], StockQueryController);
exports.StockQueryController = StockQueryController;


/***/ }),

/***/ "./src/app/dvt/core/inventory/controllers/stock-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const stock_store_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/stock-store.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let StockStoreController = class StockStoreController {
    constructor(stockStoreService) {
        this.stockStoreService = stockStoreService;
    }
    savePurchase(purchase) {
        return this.stockStoreService.savePurchase(purchase);
    }
    moderateStockLevel(body) {
        return this.stockStoreService.moderateStockLevel(body);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EInventoryStockStore.stockPurchase),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IVetStockPurchase !== "undefined" && lib_xUtils_1.IVetStockPurchase) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StockStoreController.prototype, "savePurchase", null);
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EInventoryStockStore.stockLevelModerator),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StockStoreController.prototype, "moderateStockLevel", null);
StockStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockStore.stockStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stock_store_service_1.StockStoreService !== "undefined" && stock_store_service_1.StockStoreService) === "function" ? _a : Object])
], StockStoreController);
exports.StockStoreController = StockStoreController;


/***/ }),

/***/ "./src/app/dvt/core/inventory/inventory.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InventoryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const stock_query_controller_1 = __webpack_require__("./src/app/dvt/core/inventory/controllers/stock-query.controller.ts");
const stock_store_controller_1 = __webpack_require__("./src/app/dvt/core/inventory/controllers/stock-store.controller.ts");
const stock_store_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/stock-store.service.ts");
const stock_query_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/stock-query.service.ts");
const inventory_schema_1 = __webpack_require__("./src/app/dvt/core/inventory/inventory.schema.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const dispensary_schema_1 = __webpack_require__("./src/app/dvt/core/dispensary/dispensary.schema.ts");
const dashboard_controller_1 = __webpack_require__("./src/app/dvt/core/inventory/controllers/dashboard.controller.ts");
const dashboard_service_1 = __webpack_require__("./src/app/dvt/core/inventory/services/dashboard.service.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/dvt/common/settings/settings.schema.ts");
let InventoryModule = class InventoryModule {
};
InventoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [
            stock_query_controller_1.StockQueryController,
            stock_store_controller_1.StockStoreController,
            dashboard_controller_1.DashboardController,
        ],
        providers: [
            stock_store_service_1.StockStoreService,
            stock_query_service_1.StockQueryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.stockItemModel,
                modelSchema: inventory_schema_1.StockItemSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.purchaseModel,
                modelSchema: inventory_schema_1.StockPurchaseSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopBranchModel,
                modelSchema: settings_schema_1.ShopBranchSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.saleModel,
                modelSchema: dispensary_schema_1.saleSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: dvt_db_model_1.EVetDbModels.shopExpenditureModel,
                modelSchema: settings_schema_1.ShopExpenditureSchema
            }),
            dashboard_service_1.DashboardService,
        ],
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;


/***/ }),

/***/ "./src/app/dvt/core/inventory/inventory.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockPurchaseSchema = exports.StockItemSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
exports.StockItemSchema = new mongoose_1.Schema({
    itemName: {
        type: String,
        required: true
    },
    expiryDate: Date,
    quantity: {
        type: Number,
        required: true
    },
    unitCostPrice: {
        type: Number,
        required: true,
    },
    unitSellingPrice: {
        type: Number,
        required: true,
    },
    shopBranch: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.shopBranchModel,
        required: true
    }
}, { timestamps: true });
exports.StockPurchaseSchema = new mongoose_1.Schema({
    shopBranch: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.shopBranchModel,
        required: true
    },
    vendor: {
        type: String,
        required: true,
    },
    itemsPurchased: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: dvt_db_model_1.EVetDbModels.stockItemModel
        }
    ],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: dvt_db_model_1.EVetDbModels.userAccountModel,
    },
}, { timestamps: true });


/***/ }),

/***/ "./src/app/dvt/core/inventory/services/dashboard.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let DashboardService = class DashboardService {
    constructor(stockItemModel, 
    // @Inject(EVetDbModels.purchaseModel) private purchaseModel: SoftDeleteModel<StockPurchaseDocument>,
    saleModel, 
    // @Inject(EVetDbModels.shopBranchModel) private shopBranchModel: SoftDeleteModel<TShopBranchSchemaDocument>,
    shopExpenditureModel) {
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.shopExpenditureModel = shopExpenditureModel;
    }
    getIncome(dates) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const salesAndProfit = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                        }
                    }
                },
                {
                    $lookup: {
                        from: ((_a = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        shopBranch: {
                            $arrayElemAt: ['$shopBranch', -1]
                        },
                        saleItems: '$saleItems'
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        // 'saleItems.deleted': {$ne: true}
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: '$shopBranch.branchName',
                        saleAmount: {
                            $sum: '$saleItems.amount'
                        },
                        saleProfit: {
                            $sum: {
                                $subtract: [
                                    '$saleItems.amount',
                                    {
                                        $multiply: [
                                            '$saleItems.unitCostPrice',
                                            '$saleItems.quantity',
                                        ],
                                    },
                                ],
                            }
                        }
                    }
                }
            ]);
            const salesByPayMethod = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                        }
                    }
                },
                {
                    $lookup: {
                        from: ((_b = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _b === void 0 ? void 0 : _b.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        shopBranch: {
                            $arrayElemAt: ['$shopBranch', -1]
                        },
                        saleItems: '$saleItems',
                        payMethod: '$payMethod',
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        // 'saleItems.deleted': {$ne: true}
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: {
                            payMethod: '$payMethod',
                            shopBranch: '$shopBranch.branchName'
                        },
                        saleAmount: {
                            $sum: '$saleItems.amount'
                        },
                    }
                },
                {
                    $group: {
                        _id: '$_id.shopBranch',
                        cash: {
                            $push: {
                                $cond: {
                                    if: { $eq: ['$_id.payMethod', 'Cash'] },
                                    then: '$saleAmount',
                                    else: null
                                }
                            }
                        },
                        bank: {
                            $push: {
                                $cond: {
                                    if: { $eq: ['$_id.payMethod', 'Bank'] },
                                    then: '$saleAmount',
                                    else: null
                                }
                            }
                        },
                        saleAmount: {
                            $sum: '$saleAmount',
                        },
                        // saleProfit: {
                        //   $sum: '$saleProfit',
                        // }
                    }
                },
            ]);
            const salesByDate = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                        }
                    }
                },
                {
                    $lookup: {
                        from: ((_c = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _c === void 0 ? void 0 : _c.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        shopBranch: {
                            $arrayElemAt: ['$shopBranch', -1]
                        },
                        saleItems: '$saleItems',
                        payMethod: '$payMethod',
                        createdAt: '$createdAt',
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        // 'saleItems.deleted': {$ne: true}
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: '%Y-%m-%d',
                                    date: '$createdAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            payMethod: '$payMethod',
                            shopBranch: '$shopBranch.branchName'
                        },
                        saleAmount: {
                            $sum: '$saleItems.amount'
                        },
                        // saleProfit: {
                        //   $sum: {
                        //     $subtract: [
                        //       '$saleItems.amount',
                        //       {
                        //         $multiply: [
                        //           '$saleItems.unitCostPrice',
                        //           '$saleItems.quantity',
                        //         ],
                        //       },
                        //     ],
                        //   }
                        // }
                    }
                },
                {
                    $group: {
                        _id: {
                            date: '$_id.date',
                            shopBranch: '$_id.shopBranch'
                        },
                        cash: {
                            $push: {
                                $cond: {
                                    if: { $eq: ['$_id.payMethod', 'Cash'] },
                                    then: '$saleAmount',
                                    else: null
                                }
                            }
                        },
                        bank: {
                            $push: {
                                $cond: {
                                    if: { $eq: ['$_id.payMethod', 'Bank'] },
                                    then: '$saleAmount',
                                    else: null
                                }
                            }
                        },
                        saleAmount: {
                            $sum: '$saleAmount',
                        },
                        // saleProfit: {
                        //   $sum: '$saleProfit',
                        // }
                    }
                },
                {
                    $sort: {
                        '_id.date': -1,
                    }
                }
            ]);
            return {
                salesAndProfit: salesAndProfit,
                salesByPayMethod,
                salesByDate
            };
        });
    }
    getStoreWorth() {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.stockItemModel.aggregate([
                {
                    $match: {
                        quantity: { $gte: 1 }
                    }
                },
                {
                    $lookup: {
                        from: ((_a = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $group: {
                        _id: '$shopBranch.branchName',
                        worth: {
                            $sum: {
                                $multiply: ['$quantity', '$unitCostPrice']
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: {
                            $arrayElemAt: ['$_id', -1]
                        },
                        worth: '$worth'
                    }
                }
            ]);
        });
    }
    dashboardCharts(dates, range = 'Daily') {
        var _a, _b, _c, _d, _e, _f;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const salesProfit = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                        }
                    }
                },
                {
                    $lookup: {
                        from: ((_a = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        shopBranch: {
                            $arrayElemAt: ['$shopBranch', -1]
                        },
                        saleItems: '$saleItems'
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        // 'saleItems.deleted': {$ne: true}
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: '$shopBranch.branchName',
                        saleProfit: {
                            $sum: {
                                $subtract: [
                                    '$saleItems.amount',
                                    {
                                        $multiply: [
                                            '$saleItems.unitCostPrice',
                                            '$saleItems.quantity',
                                        ],
                                    },
                                ],
                            }
                        }
                    }
                }
            ]);
            const expenses = yield ((_b = this.shopExpenditureModel) === null || _b === void 0 ? void 0 : _b.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                        }
                    }
                },
                {
                    $lookup: {
                        from: ((_c = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _c === void 0 ? void 0 : _c.toLowerCase()) + 'es',
                        foreignField: "_id",
                        localField: "shopBranch",
                        as: "shopBranch"
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        shopBranch: {
                            $arrayElemAt: ['$shopBranch', -1]
                        },
                        expenseAmount: '$expenseAmount'
                    }
                },
                {
                    $group: {
                        _id: '$shopBranch.branchName',
                        expenseAmount: {
                            $sum: '$expenseAmount'
                        }
                    }
                }
            ]));
            let rangeSales;
            if (range == 'Daily') {
                rangeSales = yield this.saleModel.aggregate([
                    {
                        $match: {
                            createdAt: {
                                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: ((_d = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _d === void 0 ? void 0 : _d.toLowerCase()) + 'es',
                            foreignField: "_id",
                            localField: "shopBranch",
                            as: "shopBranch"
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            shopBranch: {
                                $arrayElemAt: ['$shopBranch', -1]
                            },
                            saleItems: '$saleItems',
                            createdAt: '$createdAt',
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $match: {
                            // 'saleItems.deleted': {$ne: true}
                            $or: [
                                { 'saleItems.deleted': { $exists: false } },
                                { 'saleItems.deleted': !true },
                            ],
                        }
                    },
                    {
                        $group: {
                            _id: {
                                date: {
                                    $dateToString: {
                                        format: '%Y-%m-%d',
                                        date: '$createdAt',
                                        timezone: 'Africa/Lagos'
                                    },
                                },
                                shopBranch: '$shopBranch.branchName'
                            },
                            saleAmount: {
                                $sum: '$saleItems.amount'
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id.date',
                            shopBranch: '$_id.shopBranch',
                            saleAmount: '$saleAmount'
                        }
                    },
                    {
                        $sort: {
                            _id: 1
                        }
                    },
                    {
                        $limit: 7
                    },
                    {
                        $group: {
                            _id: '$shopBranch',
                            dates: {
                                $push: '$$ROOT'
                            }
                        }
                    },
                    {
                        $sort: {
                            '_id': 1,
                        }
                    }
                ]);
            }
            else if (range == 'Weekly') {
                rangeSales = yield this.saleModel.aggregate([
                    {
                        $match: {
                            createdAt: {
                                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: ((_e = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _e === void 0 ? void 0 : _e.toLowerCase()) + 'es',
                            foreignField: "_id",
                            localField: "shopBranch",
                            as: "shopBranch"
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            shopBranch: {
                                $arrayElemAt: ['$shopBranch', -1]
                            },
                            saleItems: '$saleItems',
                            createdAt: '$createdAt',
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $match: {
                            // 'saleItems.deleted': {$ne: true}
                            $or: [
                                { 'saleItems.deleted': { $exists: false } },
                                { 'saleItems.deleted': !true },
                            ],
                        }
                    },
                    {
                        $group: {
                            _id: {
                                date: {
                                    $dateToString: {
                                        format: '%Y-%m-%d',
                                        date: '$createdAt',
                                        timezone: 'Africa/Lagos'
                                    },
                                },
                                shopBranch: '$shopBranch.branchName',
                                week: { $week: { $toDate: '$createdAt' } },
                            },
                            saleAmount: {
                                $sum: '$saleItems.amount'
                            },
                        }
                    },
                    {
                        $group: {
                            _id: { week: '$_id.week', shopBranch: '$_id.shopBranch' },
                            saleAmount: { $sum: '$saleAmount' }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id.week',
                            shopBranch: '$_id.shopBranch',
                            saleAmount: '$saleAmount'
                        }
                    },
                    {
                        $limit: 12
                    },
                    {
                        $group: {
                            _id: '$shopBranch',
                            dates: {
                                $push: '$$ROOT'
                            }
                        }
                    },
                    {
                        $sort: {
                            '_id': 1,
                        }
                    }
                ]);
            }
            else if (range == 'Monthly') {
                rangeSales = yield this.saleModel.aggregate([
                    {
                        $match: {
                            createdAt: {
                                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(dates[0])),
                                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(dates[1])),
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: ((_f = dvt_db_model_1.EVetDbModels.shopBranchModel) === null || _f === void 0 ? void 0 : _f.toLowerCase()) + 'es',
                            foreignField: "_id",
                            localField: "shopBranch",
                            as: "shopBranch"
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            shopBranch: {
                                $arrayElemAt: ['$shopBranch', -1]
                            },
                            saleItems: '$saleItems',
                            createdAt: '$createdAt',
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $match: {
                            // 'saleItems.deleted': {$ne: true}
                            $or: [
                                { 'saleItems.deleted': { $exists: false } },
                                { 'saleItems.deleted': !true },
                            ],
                        }
                    },
                    {
                        $group: {
                            _id: {
                                date: {
                                    $dateToString: {
                                        format: '%Y-%m-%d',
                                        date: '$createdAt',
                                        timezone: 'Africa/Lagos'
                                    },
                                },
                                shopBranch: '$shopBranch.branchName',
                                month: { $month: { $toDate: '$createdAt' } },
                            },
                            saleAmount: {
                                $sum: '$saleItems.amount'
                            },
                        }
                    },
                    {
                        $group: {
                            _id: { month: '$_id.month', shopBranch: '$_id.shopBranch' },
                            saleAmount: { $sum: '$saleAmount' }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id.month',
                            shopBranch: '$_id.shopBranch',
                            saleAmount: '$saleAmount'
                        }
                    },
                    {
                        $limit: 12
                    },
                    {
                        $group: {
                            _id: '$shopBranch',
                            dates: {
                                $push: '$$ROOT'
                            }
                        }
                    },
                    {
                        $sort: {
                            '_id': 1,
                        }
                    }
                ]);
            }
            return {
                profitAndExpenditure: [...salesProfit || [], ...expenses || []],
                branchDateRangeSales: rangeSales || []
            };
        });
    }
};
DashboardService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.saleModel)),
    tslib_1.__param(2, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopExpenditureModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], DashboardService);
exports.DashboardService = DashboardService;


/***/ }),

/***/ "./src/app/dvt/core/inventory/services/stock-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
// import { EVetDbModels, IHealmahClsStore } from '@healmah-nest';
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
// import { saleDocument } from '../../dispensary/dispensary.schema';
const date_fns_1 = __webpack_require__("date-fns");
const mongoose_1 = __webpack_require__("mongoose");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let StockQueryService = class StockQueryService {
    constructor(stockItemModel, purchaseModel, shopBranchModel, saleModel, cls) {
        this.stockItemModel = stockItemModel;
        this.purchaseModel = purchaseModel;
        this.shopBranchModel = shopBranchModel;
        this.saleModel = saleModel;
        this.cls = cls;
    }
    getPurchases() {
        return this.purchaseModel.find({}).sort({ createdAt: -1 })
            .populate([
            {
                path: 'itemsPurchased',
                model: dvt_db_model_1.EVetDbModels.stockItemModel,
            },
            {
                path: 'shopBranch',
                model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                select: 'branchName',
                options: { withDeleted: true },
            },
            {
                path: 'userAccount',
                model: dvt_db_model_1.EVetDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
        ;
    }
    getActiveStocks(type = 'single', branch) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(type, branch);
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: branch });
            if (branch && shopBranch) {
                if (type == 'multiple')
                    return this.stockItemModel.find({
                        shopBranch: shopBranch._id,
                        quantity: {
                            $gte: 1
                        }
                    }).sort({
                        itemName: 1,
                        createdAt: -1
                    });
                else
                    return this.stockItemModel.aggregate([
                        {
                            $match: {
                                shopBranch: shopBranch._id,
                                quantity: {
                                    $gte: 1
                                }
                            }
                        },
                        {
                            $sort: {
                                createdAt: -1
                            }
                        },
                        {
                            $group: {
                                _id: '$itemName',
                                id: {
                                    $push: '$_id'
                                },
                                quantity: {
                                    $sum: '$quantity'
                                },
                                itemName: {
                                    $push: '$itemName'
                                },
                                unitCostPrice: {
                                    $push: '$unitCostPrice'
                                },
                                unitSellingPrice: {
                                    $push: '$unitSellingPrice'
                                },
                                createdAt: {
                                    $push: '$createdAt'
                                },
                                expiryDate: {
                                    $push: '$expiryDate'
                                }
                            }
                        },
                        {
                            $project: {
                                _id: {
                                    $arrayElemAt: ['$id', 0]
                                },
                                itemName: {
                                    $arrayElemAt: ['$itemName', 0]
                                },
                                quantity: '$quantity',
                                unitCostPrice: {
                                    $arrayElemAt: ['$unitCostPrice', 0]
                                },
                                unitSellingPrice: {
                                    $arrayElemAt: ['$unitSellingPrice', 0]
                                },
                                createdAt: {
                                    $arrayElemAt: ['$createdAt', 0]
                                },
                                expiryDate: {
                                    $arrayElemAt: ['$expiryDate', 0]
                                },
                            }
                        },
                        {
                            $sort: {
                                itemName: 1
                            }
                        }
                    ]);
            }
            else {
                if (type == 'multiple')
                    return this.stockItemModel.find({
                        quantity: {
                            $gte: 1
                        }
                    }).sort({
                        itemName: 1,
                        createdAt: -1
                    });
                else
                    return this.stockItemModel.aggregate([
                        {
                            $match: {
                                quantity: {
                                    $gte: 1
                                }
                            }
                        },
                        {
                            $sort: {
                                createdAt: -1
                            }
                        },
                        {
                            $group: {
                                _id: '$itemName',
                                id: {
                                    $push: '$_id'
                                },
                                quantity: {
                                    $sum: '$quantity'
                                },
                                itemName: {
                                    $push: '$itemName'
                                },
                                unitCostPrice: {
                                    $push: '$unitCostPrice'
                                },
                                unitSellingPrice: {
                                    $push: '$unitSellingPrice'
                                },
                                createdAt: {
                                    $push: '$createdAt'
                                },
                                expiryDate: {
                                    $push: '$expiryDate'
                                }
                            }
                        },
                        {
                            $project: {
                                _id: {
                                    $arrayElemAt: ['$id', 0]
                                },
                                itemName: {
                                    $arrayElemAt: ['$itemName', 0]
                                },
                                quantity: '$quantity',
                                unitCostPrice: {
                                    $arrayElemAt: ['$unitCostPrice', 0]
                                },
                                unitSellingPrice: {
                                    $arrayElemAt: ['$unitSellingPrice', 0]
                                },
                                createdAt: {
                                    $arrayElemAt: ['$createdAt', 0]
                                },
                                expiryDate: {
                                    $arrayElemAt: ['$expiryDate', 0]
                                },
                            }
                        },
                        {
                            $sort: {
                                itemName: 1
                            }
                        }
                    ]);
            }
        });
    }
    getStockItemPurchase(stockItemId) {
        return this.purchaseModel.findOne({
            itemsPurchased: stockItemId
        })
            .populate([
            {
                path: 'itemsPurchased',
                model: dvt_db_model_1.EVetDbModels.stockItemModel,
            },
            {
                path: 'shopBranch',
                model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                select: 'branchName',
                options: { withDeleted: true },
            },
            {
                path: 'userAccount',
                model: dvt_db_model_1.EVetDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
    }
    getOldStockItems() {
        // console.log('Old for Preview');
        return this.stockItemModel.aggregate([
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $group: {
                    _id: '$itemName',
                    items: { $push: '$$ROOT' }
                    // unitCostPrice: { $addToSet: '$unitCostPrice' },
                    // unitSellingPrice: { $addToSet: '$unitSellingPrice' },
                },
            },
            {
                $unwind: '$items'
            },
            {
                $sort: {
                    'items.itemName': -1,
                    'items.createdAt': -1
                }
            },
            {
                $group: {
                    _id: '$items.itemName',
                    unitCostPrice: { $push: '$items.unitCostPrice' },
                    unitSellingPrice: { $push: '$items.unitSellingPrice' },
                },
            },
            {
                $sort: {
                    '_id': -1,
                }
            },
            {
                $project: {
                    _id: '$_id',
                    unitCostPrice: { $arrayElemAt: ['$unitCostPrice', 0] },
                    unitSellingPrice: { $arrayElemAt: ['$unitSellingPrice', 0] },
                },
            },
        ]);
    }
    getOutOfStock(osType, branch) {
        var _a, _b, _c, _d;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const outOfStocks = [];
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: branch });
            if (shopBranch) {
                const sales = yield this.saleModel.aggregate([
                    {
                        $match: {
                            shopBranch: new mongoose_1.Types.ObjectId(shopBranch._id),
                            createdAt: {
                                $gte: (0, date_fns_1.subWeeks)(new Date(), 6),
                            },
                        },
                    },
                    {
                        $unwind: '$saleItems',
                    },
                    {
                        $group: {
                            _id: '$saleItems.itemName',
                            quantity: { $push: '$saleItems.quantity' }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            quantity: {
                                $add: [{ $toInt: { $avg: '$quantity' } }, 1]
                            }
                        }
                    }
                ]);
                for (let i = 0; i < sales.length; i++) {
                    const stockItem = yield this.stockItemModel.aggregate([
                        {
                            $match: {
                                shopBranch: new mongoose_1.Types.ObjectId(shopBranch._id),
                                itemName: (_a = sales[i]) === null || _a === void 0 ? void 0 : _a._id,
                            },
                        },
                        {
                            $sort: {
                                createdAt: -1,
                            },
                        },
                        {
                            $group: {
                                _id: '$itemName',
                                quantity: { $sum: '$quantity' },
                                createdAt: { $push: '$createdAt' },
                                expiryDate: { $push: '$expiryDate' },
                                unitCostPrice: { $push: '$unitCostPrice' },
                            },
                        },
                        {
                            $match: {
                                quantity: osType == 'os'
                                    ? { $lte: 0 }
                                    : { $lte: (_b = sales[i]) === null || _b === void 0 ? void 0 : _b.quantity, $gt: 0 },
                            },
                        },
                        {
                            $project: {
                                _id: '$_id',
                                quantity: '$quantity',
                                expiryDate: { $arrayElemAt: ['$expiryDate', 0] },
                                createdAt: { $arrayElemAt: ['$createdAt', 0] },
                                unitCostPrice: { $avg: '$unitCostPrice' },
                            },
                        },
                    ]);
                    if (stockItem && stockItem.length) {
                        stockItem[0].avgCons = sales[0].quantity,
                            stockItem[0].avgCost =
                                stockItem[0].unitCostPrice * stockItem[0].avgCons;
                        outOfStocks.push(stockItem[0]);
                    }
                }
                return outOfStocks;
            }
            const sales = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, date_fns_1.subWeeks)(new Date(), 6),
                        },
                    },
                },
                {
                    $unwind: '$saleItems',
                },
                {
                    $group: {
                        _id: '$saleItems.itemName',
                        quantity: { $push: '$saleItems.quantity' }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        quantity: {
                            $add: [{ $toInt: { $avg: '$quantity' } }, 1]
                        }
                    }
                }
            ]);
            for (let i = 0; i < sales.length; i++) {
                const stockItem = yield this.stockItemModel.aggregate([
                    {
                        $match: {
                            itemName: (_c = sales[i]) === null || _c === void 0 ? void 0 : _c._id,
                        },
                    },
                    {
                        $sort: {
                            createdAt: -1,
                        },
                    },
                    {
                        $group: {
                            _id: '$itemName',
                            quantity: { $sum: '$quantity' },
                            createdAt: { $push: '$createdAt' },
                            expiryDate: { $push: '$expiryDate' },
                            unitCostPrice: { $push: '$unitCostPrice' },
                        },
                    },
                    {
                        $match: {
                            quantity: osType == 'os'
                                ? { $lte: 0 }
                                : { $lte: (_d = sales[i]) === null || _d === void 0 ? void 0 : _d.quantity, $gt: 0 },
                        },
                    },
                    {
                        $project: {
                            _id: '$_id',
                            quantity: '$quantity',
                            expiryDate: { $arrayElemAt: ['$expiryDate', 0] },
                            createdAt: { $arrayElemAt: ['$createdAt', 0] },
                            unitCostPrice: { $avg: '$unitCostPrice' },
                        },
                    },
                ]);
                if (stockItem && stockItem.length) {
                    stockItem[0].avgCons = sales[0].quantity,
                        stockItem[0].avgCost =
                            stockItem[0].unitCostPrice * stockItem[0].avgCons;
                    outOfStocks.push(stockItem[0]);
                }
            }
            return outOfStocks;
        });
    }
    getPreviousVendors() {
        return this.purchaseModel.aggregate([
            {
                $group: {
                    _id: '$vendor'
                }
            }
        ]);
    }
};
StockQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.purchaseModel)),
    tslib_1.__param(2, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__param(3, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.saleModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _e : Object])
], StockQueryService);
exports.StockQueryService = StockQueryService;


/***/ }),

/***/ "./src/app/dvt/core/inventory/services/stock-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const common_1 = __webpack_require__("@nestjs/common");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const dvt_db_model_1 = __webpack_require__("./src/app/dvt/dvt-db.model.ts");
let StockStoreService = class StockStoreService {
    constructor(stockItemModel, purchaseModel, shopBranchModel, cls) {
        this.stockItemModel = stockItemModel;
        this.purchaseModel = purchaseModel;
        this.shopBranchModel = shopBranchModel;
        this.cls = cls;
    }
    savePurchase(purchase) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Save Purchase Now');
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: purchase.shopBranch });
            if (shopBranch) {
                purchase.shopBranch = shopBranch._id;
                purchase.itemsPurchased.forEach((item) => {
                    delete item['id'];
                    return item.shopBranch = shopBranch._id;
                });
            }
            else {
                throw new Error("Branch not found!");
            }
            if (purchase === null || purchase === void 0 ? void 0 : purchase.id) {
                const items = [];
                const stockItemsToEdit = purchase.itemsPurchased.filter((item) => item === null || item === void 0 ? void 0 : item.id);
                const stockItemsToCreate = purchase.itemsPurchased.filter((item) => !(item === null || item === void 0 ? void 0 : item.id));
                if (stockItemsToCreate === null || stockItemsToCreate === void 0 ? void 0 : stockItemsToCreate.length) {
                    const itemsToCreate = yield this.stockItemModel.create(stockItemsToCreate);
                    itemsToCreate === null || itemsToCreate === void 0 ? void 0 : itemsToCreate.forEach((item) => items.push(item._id));
                }
                if (stockItemsToEdit === null || stockItemsToEdit === void 0 ? void 0 : stockItemsToEdit.length) {
                    for (let i = 0; i < stockItemsToEdit.length; i++) {
                        const itemToEdit = yield this.stockItemModel.findByIdAndUpdate((_a = stockItemsToEdit[i]) === null || _a === void 0 ? void 0 : _a.id, stockItemsToEdit[i], {
                            new: true
                        });
                        if (itemToEdit)
                            items.push(itemToEdit === null || itemToEdit === void 0 ? void 0 : itemToEdit._id);
                    }
                }
                purchase.userAccount = this.cls.get('contextUser._id');
                purchase.itemsPurchased = items;
                return this.purchaseModel
                    .findByIdAndUpdate(purchase.id, purchase, {
                    new: true,
                })
                    .populate([
                    {
                        path: 'itemsPurchased',
                        model: dvt_db_model_1.EVetDbModels.stockItemModel,
                    },
                    {
                        path: 'shopBranch',
                        model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                        select: 'branchName',
                        options: { withDeleted: true },
                    },
                    {
                        path: 'userAccount',
                        model: dvt_db_model_1.EVetDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            else {
                // const purchaseExist = await this.purchaseModel.find({
                //   vendor: purchase.vendor,
                //   itemsPurchased: {$size: purchase.itemsPurchased.length},
                //   createdAt: {
                //     $gte: getZonedStartOfDay(new Date())
                //   }
                // });
                // if(purchaseExist) {
                //   for(let i = 0; i < purchaseExist.length; i++) {
                //     const minuteDiff = differenceInMinutes( new Date(), new Date(purchaseExist[i].createdAt))
                //     console.log(minuteDiff, purchaseExist[i].createdAt);
                //     if(minuteDiff < 10) {
                //       throw new BadRequestException(
                //         "This is likely a duplicate, please try again in next "
                //         + (10 - minuteDiff) +' minutes.'
                //         );
                //     }
                //   }
                //   // console.log(purchaseExist, timeNow);
                // }
                // const items: any[] = [];
                // for(let i = 0; i < purchase.itemsPurchased.length; i++) {
                //   const itemsToCreate = await this.stockItemModel.create(purchase.itemsPurchased[i]);
                //   itemsToCreate ? items.push(itemsToCreate._id) : null;
                // }
                const itemItems = yield this.stockItemModel.create(purchase.itemsPurchased);
                purchase.itemsPurchased = itemItems.map((item) => item === null || item === void 0 ? void 0 : item._id); //items;
                purchase.userAccount = this.cls.get('contextUser._id');
                // const saved = await this.purchaseModel.create(purchase);
                // return saved.populate([
                //   {
                //     path: 'itemsPurchased',
                //     model: EVetDbModels.stockItemModel,
                //   },
                //   {
                //     path: 'shopBranch',
                //     model: EVetDbModels.shopBranchModel,
                //     select: 'branchName',
                //     options: { withDeleted: true },
                //   },
                //   {
                //     path: 'userAccount',
                //     model: EVetDbModels.userAccountModel,
                //     select: 'acctType email userName firstName surName appModule shopBranch',
                //     options: { withDeleted: true },
                //   },
                // ]);
                return (yield this.purchaseModel.create(purchase)).populate([
                    {
                        path: 'itemsPurchased',
                        model: dvt_db_model_1.EVetDbModels.stockItemModel,
                    },
                    {
                        path: 'shopBranch',
                        model: dvt_db_model_1.EVetDbModels.shopBranchModel,
                        select: 'branchName',
                        options: { withDeleted: true },
                    },
                    {
                        path: 'userAccount',
                        model: dvt_db_model_1.EVetDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            ;
        });
    }
    moderateStockLevel(body) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const shopBranch = yield this.shopBranchModel.findOne({ branchName: body.shopBranch });
            if (body.updateType == 'itemName' && body.newItemName) {
                return this.stockItemModel.updateMany({ itemName: body.itemName, shopBranch: shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id }, {
                    $set: {
                        itemName: body.newItemName,
                    }
                }, { new: true, multi: true });
            }
            else if (body.updateType == 'quantity' &&
                (parseInt(body.newQtty) >= 0) ||
                (parseInt(body.unitCostPrice) >= 0 && parseInt(body.unitSellingPrice) >= 0)) {
                const stockItemVariants = yield this.stockItemModel.find({
                    itemName: body.itemName,
                    shopBranch: shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id,
                    quantity: {
                        $gte: 1
                    }
                }).sort({ createdAt: -1 });
                const firstItem = stockItemVariants[0];
                const restItems = stockItemVariants.slice(1);
                if (restItems === null || restItems === void 0 ? void 0 : restItems.length) {
                    yield this.stockItemModel.updateMany({
                        itemName: firstItem.itemName,
                        shopBranch: shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id,
                        quantity: {
                            $gte: 1
                        }
                    }, {
                        $set: {
                            quantity: 0,
                            unitCostPrice: body.unitCostPrice,
                            unitSellingPrice: body.unitSellingPrice
                        },
                    }, {
                        new: true,
                        multi: true
                    });
                }
                if (firstItem === null || firstItem === void 0 ? void 0 : firstItem._id) {
                    return yield this.stockItemModel.findOneAndUpdate({
                        _id: firstItem === null || firstItem === void 0 ? void 0 : firstItem._id,
                        shopBranch: shopBranch === null || shopBranch === void 0 ? void 0 : shopBranch._id
                    }, {
                        $set: {
                            quantity: (_a = body === null || body === void 0 ? void 0 : body.newQtty) !== null && _a !== void 0 ? _a : body === null || body === void 0 ? void 0 : body.currentQtty,
                            unitCostPrice: body.unitCostPrice,
                            unitSellingPrice: body.unitSellingPrice
                        },
                    }, {
                        new: true
                    });
                }
            }
            return;
        });
    }
};
StockStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.purchaseModel)),
    tslib_1.__param(2, (0, common_1.Inject)(dvt_db_model_1.EVetDbModels.shopBranchModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], StockStoreService);
exports.StockStoreService = StockStoreService;


/***/ }),

/***/ "./src/app/dvt/dvt-db.model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVetDbModels = void 0;
var EVetDbModels;
(function (EVetDbModels) {
    EVetDbModels["userAccountModel"] = "Vatma_UserAccount";
    EVetDbModels["shopBranchModel"] = "Vatma_SHOP_BRANCH";
    EVetDbModels["shopExpenditureModel"] = "Vatma_SHOP_EXPENDITURE";
    EVetDbModels["stockItemModel"] = "Vatma_StockItem";
    EVetDbModels["saleModel"] = "Vatma_Sale";
    EVetDbModels["saleItemModel"] = "Vatma_SALE_ITEM";
    EVetDbModels["purchaseModel"] = "Vatma_Purchase";
})(EVetDbModels = exports.EVetDbModels || (exports.EVetDbModels = {}));


/***/ }),

/***/ "./src/app/dvt/dvt.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DvtModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const account_module_1 = __webpack_require__("./src/app/dvt/common/account/account.module.ts");
const settings_module_1 = __webpack_require__("./src/app/dvt/common/settings/settings-module.ts");
const dispensary_module_1 = __webpack_require__("./src/app/dvt/core/dispensary/dispensary.module.ts");
const inventory_module_1 = __webpack_require__("./src/app/dvt/core/inventory/inventory.module.ts");
let DvtModule = class DvtModule {
};
DvtModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            account_module_1.UserAccountModule,
            settings_module_1.SettingsModule,
            dispensary_module_1.DispensaryModule,
            inventory_module_1.InventoryModule
        ]
    })
], DvtModule);
exports.DvtModule = DvtModule;


/***/ }),

/***/ "./src/app/dvt/dvt.routing.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DvtModuleRouting = void 0;
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const dvt_module_1 = __webpack_require__("./src/app/dvt/dvt.module.ts");
const account_module_1 = __webpack_require__("./src/app/dvt/common/account/account.module.ts");
const settings_module_1 = __webpack_require__("./src/app/dvt/common/settings/settings-module.ts");
const dispensary_module_1 = __webpack_require__("./src/app/dvt/core/dispensary/dispensary.module.ts");
const inventory_module_1 = __webpack_require__("./src/app/dvt/core/inventory/inventory.module.ts");
exports.DvtModuleRouting = [
    {
        path: 'dvt',
        module: dvt_module_1.DvtModule,
        children: [
            {
                path: lib_xUtils_1.ECommonAppModule.Account.toLowerCase(),
                module: account_module_1.UserAccountModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.Setting.toLowerCase(),
                module: settings_module_1.SettingsModule
            },
            {
                path: lib_xUtils_1.ECoreAppModule.Dispensary.toLowerCase(),
                module: dispensary_module_1.DispensaryModule
            },
            {
                path: lib_xUtils_1.ECoreAppModule.Inventory.toLowerCase(),
                module: inventory_module_1.InventoryModule
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/nix/common/data-entry/controllers/data-entry.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEntryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const data_entry_service_1 = __webpack_require__("./src/app/nix/common/data-entry/services/data-entry.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let DataEntryController = class DataEntryController {
    constructor(dataEntryService) {
        this.dataEntryService = dataEntryService;
    }
    saveDataEntry(body) {
        return this.dataEntryService.saveDataEntry(body);
    }
    getDataEntry(query) {
        return this.dataEntryService.getDataEntries(JSON.parse(query || '{}'));
    }
    deleteDataEntry(id) {
        return this.dataEntryService.deleteDataEntry(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DataEntryController.prototype, "saveDataEntry", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DataEntryController.prototype, "getDataEntry", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('Admin', '*'),
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DataEntryController.prototype, "deleteDataEntry", null);
DataEntryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ePlanixRoutes.dataEntry),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_entry_service_1.DataEntryService !== "undefined" && data_entry_service_1.DataEntryService) === "function" ? _a : Object])
], DataEntryController);
exports.DataEntryController = DataEntryController;


/***/ }),

/***/ "./src/app/nix/common/data-entry/data-entry.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEntryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const data_entry_controller_1 = __webpack_require__("./src/app/nix/common/data-entry/controllers/data-entry.controller.ts");
const data_entry_service_1 = __webpack_require__("./src/app/nix/common/data-entry/services/data-entry.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const data_entry_schema_1 = __webpack_require__("./src/app/nix/common/data-entry/data-entry.schema.ts");
let DataEntryModule = class DataEntryModule {
};
DataEntryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [
            data_entry_controller_1.DataEntryController
        ],
        providers: [
            data_entry_service_1.DataEntryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.dataEntryModel,
                modelSchema: data_entry_schema_1.dataEntrysSchema
            }),
        ],
    })
], DataEntryModule);
exports.DataEntryModule = DataEntryModule;


/***/ }),

/***/ "./src/app/nix/common/data-entry/data-entry.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataEntrysSchema = exports.dataEntryOutcomeIndicatorSchema = exports.outputIndicatorsInputsSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
exports.outputIndicatorsInputsSchema = new mongoose_1.Schema({
    inputValue: String,
    inputLabel: String,
    inputType: String,
    inputRequired: String,
    inputOptions: String
});
exports.dataEntryOutcomeIndicatorSchema = new mongoose_1.Schema({
    outcomeIndicator: {
        type: String,
        required: true
    },
    outputIndicatorsInputs: {
        type: [exports.outputIndicatorsInputsSchema],
        required: true
    }
});
exports.dataEntrysSchema = new mongoose_1.Schema({
    entryType: {
        type: String,
        required: true
    },
    sector: {
        required: true,
        type: mongoose_1.Types.ObjectId,
        ref: nix_db_model_1.ENixDbModels.sectorsModel,
    },
    lga: {
        // required: true,
        type: mongoose_1.Types.ObjectId,
        ref: nix_db_model_1.ENixDbModels.lgaModel,
    },
    lgaWard: String,
    collectionDate: {
        type: Date,
        required: true
    },
    outcomeIndicators: {
        type: [exports.dataEntryOutcomeIndicatorSchema]
    },
    outcomeOutputIndicators: {
        type: [exports.dataEntryOutcomeIndicatorSchema]
    }
}, { timestamps: true });
// @Schema({
//   timestamps: true
// })
// export class DataEntry {
//   @Prop({
//     type: String,
//     required: true
//   })
//   sectorName: string;
//   @Prop({
//     type: String,
//     required: true
//   })
//   lgaName: string;
//   @Prop({
//     type: String,
//     required: true
//   })
//   lgaWard: string;
//   @Prop({
//     type: Date,
//     required: true
//   })
//   collectionDate: Date;
//   @Prop({
//     type: [dataEntryOutcomeIndicator],
//     required: true
//   })
//   outcomeIndicators: dataEntryOutcomeIndicator[];
// }
// export type TDataEntryDocument = HydratedDocument<DataEntry>;
// export const dataEntrysSchema = SchemaFactory.createForClass(DataEntry);


/***/ }),

/***/ "./src/app/nix/common/data-entry/services/data-entry.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEntryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const mongoose_1 = __webpack_require__("mongoose");
let DataEntryService = class DataEntryService {
    constructor(dataEntryModel) {
        this.dataEntryModel = dataEntryModel;
    }
    saveDataEntry(dataEntry) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (dataEntry === null || dataEntry === void 0 ? void 0 : dataEntry._id)
                return this.dataEntryModel.findByIdAndUpdate(dataEntry._id, dataEntry, { new: true });
            return this.dataEntryModel.create(dataEntry);
        });
    }
    ;
    getDataEntries(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const match = (query === null || query === void 0 ? void 0 : query.sector) == 'All' ? {
                entryType: query === null || query === void 0 ? void 0 : query.type,
                collectionDate: {
                    $gte: new Date(query === null || query === void 0 ? void 0 : query.sDate),
                    $lte: new Date(query === null || query === void 0 ? void 0 : query.eDate)
                }
            } : {
                entryType: query === null || query === void 0 ? void 0 : query.type,
                sector: new mongoose_1.Types.ObjectId(query === null || query === void 0 ? void 0 : query.sector),
                collectionDate: {
                    $gte: new Date(query === null || query === void 0 ? void 0 : query.sDate),
                    $lte: new Date(query === null || query === void 0 ? void 0 : query.eDate)
                }
            };
            return this.dataEntryModel.find(match, null, {
                sort: {
                    collectionDate: 'asc'
                }
            }).populate([
                {
                    path: 'sector',
                    model: nix_db_model_1.ENixDbModels.sectorsModel,
                    select: 'sectorName',
                },
                {
                    path: 'lga',
                    model: nix_db_model_1.ENixDbModels.lgaModel,
                    select: 'lgaName',
                },
            ]);
            ;
        });
    }
    deleteDataEntry(id) {
        return this.dataEntryModel.findByIdAndDelete(id, { new: true });
    }
};
DataEntryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.dataEntryModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object])
], DataEntryService);
exports.DataEntryService = DataEntryService;


/***/ }),

/***/ "./src/app/nix/common/user-account/controllers/account.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const account_service_1 = __webpack_require__("./src/app/nix/common/user-account/services/account.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let UserAccountController = class UserAccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    generateAccountCode(body) {
        return this.accountService.generateAccountCode(body);
    }
    saveAccountCode(body) {
        return this.accountService.saveAccountCode(body);
    }
    getAccountCodes() {
        return this.accountService.getAccountCodes();
    }
    deleteAccountCode(id) {
        return this.accountService.deleteAccountCode(id);
    }
    getUserAccount(data) {
        return this.accountService.getUserAccount(data.email);
    }
    // @UseGuards(AuthGuard('jwt'))
    getUserAccounts() {
        return this.accountService.getUserAccounts();
    }
    deleteUserAccount(id) {
        return this.accountService.deleteUserAccount(id);
    }
    ///////////////// LGA
    saveLga(body) {
        return this.accountService.saveLga(body);
    }
    getLga() {
        return this.accountService.getLgas();
    }
    deleteLga(id) {
        return this.accountService.deleteLga(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.ePlanixSettingsStore.code),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "generateAccountCode", null);
tslib_1.__decorate([
    (0, common_1.Put)(lib_xUtils_1.ePlanixSettingsStore.code + '/:body'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "saveAccountCode", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ePlanixSettingsStore.code),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "getAccountCodes", null);
tslib_1.__decorate([
    (0, common_1.Delete)(lib_xUtils_1.ePlanixSettingsStore.code + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "deleteAccountCode", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Pick !== "undefined" && Pick) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "getUserAccount", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ePlanixSettingsStore.account),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "getUserAccounts", null);
tslib_1.__decorate([
    (0, common_1.Delete)(lib_xUtils_1.ePlanixSettingsStore.account + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "deleteUserAccount", null);
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.ePlanixSettingsStore.lga),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "saveLga", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ePlanixSettingsStore.lga),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "getLga", null);
tslib_1.__decorate([
    (0, common_1.Delete)(lib_xUtils_1.ePlanixSettingsStore.lga + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountController.prototype, "deleteLga", null);
UserAccountController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ePlanixSettingsStore.account),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof account_service_1.UserAccountService !== "undefined" && account_service_1.UserAccountService) === "function" ? _a : Object])
], UserAccountController);
exports.UserAccountController = UserAccountController;


/***/ }),

/***/ "./src/app/nix/common/user-account/services/account.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
// import { TAccountCodeDocument, TUserAccountDocument, UserAccount } from '../user-account.schema';
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountService = class UserAccountService {
    constructor(accountService, userAccountModel, accountCodeModel, lgaModel, sectorsModel) {
        this.accountService = accountService;
        this.userAccountModel = userAccountModel;
        this.accountCodeModel = accountCodeModel;
        this.lgaModel = lgaModel;
        this.sectorsModel = sectorsModel;
        this.accountService.accountModel = this.userAccountModel;
        this.accountService.accountUserKey = 'email';
    }
    registerAccount(user) {
        // console.log(user);
        // return
        if (user === null || user === void 0 ? void 0 : user._id)
            return this.userAccountModel.findByIdAndUpdate(user._id, user);
        return this.userAccountModel.create(user);
    }
    ;
    getUserAccounts() {
        return this.userAccountModel.find({}).populate([
            {
                path: 'acctCode',
                select: 'acctCode'
            },
            {
                path: 'sector',
                select: 'sectorName'
            },
        ]);
        // .populate(
        //   [
        //     {
        //       path: 'acctCode',
        //       model: ENixDbModels.userAccountCodeModel?.toLowerCase()+'s',
        //       options: { withDeleted: true },
        //     }
        //   ]
        // )
    }
    updateRefressToken(userId, update) {
        return this.userAccountModel.findByIdAndUpdate(userId, update);
    }
    findAccount(userData, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.userAccountModel.findOne({ email: userData.email });
            if (userExists && type == 'signUp' && !userData._id)
                throw new common_1.BadRequestException('User already exists');
            if (type == 'signUp') {
                const acctCodes = yield this.accountCodeModel.find({});
                const acctUsers = yield this.userAccountModel.find({});
                if ((acctUsers === null || acctUsers === void 0 ? void 0 : acctUsers.length) && type == 'signUp' && !(userData === null || userData === void 0 ? void 0 : userData.acctCode)) {
                    console.log("acctUsers?.length && type == 'signUp' && !userData?.acctCode");
                    throw new common_1.BadRequestException('Account registration denied - No code provided, please contact Admin');
                }
                if (!acctCodes.length) {
                    const defaultSector = yield this.sectorsModel.create({
                        sectorName: 'All'
                    });
                    const defaultAcctCode = yield this.accountCodeModel.create({
                        acctCode: '12345',
                        sector: defaultSector === null || defaultSector === void 0 ? void 0 : defaultSector._id,
                        acctType: 'Admin'
                    });
                    // userData.acctType = 'Admin';
                    // userData.sector = 'All';
                    userData.acctCode = defaultAcctCode.acctCode;
                }
                const userHasCode = yield this.accountCodeModel.findOne({ acctCode: userData.acctCode });
                // return
                if (!(userHasCode === null || userHasCode === void 0 ? void 0 : userHasCode._id)) {
                    console.log("!userHasCode");
                    throw new common_1.BadRequestException('Account registration denied - No code provided, please contact Admin');
                }
                // console.log(userData);
                // console.log(userHasCode);
                // return
                // const acctCode = await this.accountCodeModel.findOne({acctCode: userData.acctCode});
                const codeAlreadyUsed = yield this.userAccountModel.findOne({ acctCode: userHasCode === null || userHasCode === void 0 ? void 0 : userHasCode._id });
                if (codeAlreadyUsed && !(userData === null || userData === void 0 ? void 0 : userData._id)) {
                    throw new common_1.BadRequestException('RegCode already used, please contact Admin');
                }
                userData.sector = userHasCode.sector;
                userData.acctType = userHasCode.acctType;
                userData.acctCode = userHasCode._id;
                return userData;
            }
            return userExists;
        });
    }
    generateAccountCode(body) {
        body.acctCode = (0, lib_xUtils_1.randomChars)('mixed', 6);
        return body;
    }
    saveAccountCode(body) {
        return this.accountCodeModel.create(body);
    }
    getAccountCodes() {
        var _a;
        return this.accountCodeModel.aggregate([
            {
                $project: {
                    _id: '$_id',
                    acctCode: '$acctCode',
                    sector: '$sector',
                    acctType: '$acctType',
                    createdAt: '$createdAt',
                }
            },
            {
                $lookup: {
                    from: ((_a = nix_db_model_1.ENixDbModels.sectorsModel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + 's',
                    localField: 'sector',
                    foreignField: '_id',
                    as: 'sector'
                }
            },
            {
                $project: {
                    _id: '$_id',
                    acctCode: '$acctCode',
                    sector: '$sector.sectorName',
                    acctType: '$acctType',
                    createdAt: '$createdAt',
                }
            },
        ]);
    }
    getUserAccount(email) {
        return this.userAccountModel.findOne({ email: email }, { passWord: 0, refreshToken: 0, salt: 0 }).populate([
            {
                path: 'acctCode',
                select: 'acctCode'
            },
            {
                path: 'sector',
                select: 'sectorName'
            },
        ]);
    }
    deleteUserAccount(id) {
        return this.userAccountModel.findByIdAndDelete(id, { new: true });
    }
    deleteAccountCode(id) {
        return this.accountCodeModel.findByIdAndDelete(id, { new: true });
    }
    saveLga(lga) {
        if (lga === null || lga === void 0 ? void 0 : lga._id)
            return this.lgaModel.findByIdAndUpdate(lga._id, lga);
        return this.lgaModel.create(lga);
    }
    ;
    getLgas() {
        return this.lgaModel.find({});
    }
    deleteLga(id) {
        return this.lgaModel.findByIdAndDelete(id, { new: true });
    }
};
UserAccountService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.userAccountModel)),
    tslib_1.__param(2, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.userAccountCodeModel)),
    tslib_1.__param(3, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.lgaModel)),
    tslib_1.__param(4, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.sectorsModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object])
], UserAccountService);
exports.UserAccountService = UserAccountService;


/***/ }),

/***/ "./src/app/nix/common/user-account/user-account.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const account_controller_1 = __webpack_require__("./src/app/nix/common/user-account/controllers/account.controller.ts");
const account_service_1 = __webpack_require__("./src/app/nix/common/user-account/services/account.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const user_account_schema_1 = __webpack_require__("./src/app/nix/common/user-account/user-account.schema.ts");
const sectors_schema_1 = __webpack_require__("./src/app/nix/core/sectors/sectors.schema.ts");
let UserAccountModule = class UserAccountModule {
};
UserAccountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [
            account_controller_1.UserAccountController
        ],
        providers: [
            account_service_1.UserAccountService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.userAccountModel,
                modelSchema: user_account_schema_1.UserAccountSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.userAccountCodeModel,
                modelSchema: user_account_schema_1.UserAccountCodeSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.lgaModel,
                modelSchema: user_account_schema_1.LgaSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.sectorsModel,
                modelSchema: sectors_schema_1.sectorsSchema
            }),
        ],
        exports: [account_service_1.UserAccountService]
    })
], UserAccountModule);
exports.UserAccountModule = UserAccountModule;


/***/ }),

/***/ "./src/app/nix/common/user-account/user-account.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LgaSchema = exports.UserAccountSchema = exports.UserAccountCodeSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
// @Schema({
//   timestamps: true
// })
// export class UserAccountCode {
//   @Prop({
//     type: String,
//     required: true
//   })
//   acctCode: string;
//   @Prop({
//     type: String,
//     required: true
//   })
//   sector: string;
//   @Prop({
//     type: String,
//     required: true
//   })
//   acctType: string;
// }
// export type TAccountCodeDocument = HydratedDocument<UserAccountCode>;
// export const UserAccountCodeSchema = SchemaFactory.createForClass(UserAccountCode)
exports.UserAccountCodeSchema = new mongoose_1.Schema({
    acctCode: {
        type: String,
        required: true,
        unique: true
    },
    sector: {
        type: mongoose_1.Types.ObjectId,
        ref: nix_db_model_1.ENixDbModels.sectorsModel,
        required: true
    },
    acctType: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.UserAccountSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sector: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: nix_db_model_1.ENixDbModels.sectorsModel,
    },
    acctType: {
        type: String,
        required: true
    },
    acctCode: {
        type: mongoose_1.Types.ObjectId,
        ref: nix_db_model_1.ENixDbModels.userAccountCodeModel
    },
    passWord: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    },
}, { timestamps: true });
exports.LgaSchema = new mongoose_1.Schema({
    lgaName: {
        required: true,
        type: String
    },
    wards: {
        required: true,
        type: [String]
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/nix/core/dashboard/controllers/dashboard.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const dashboard_service_1 = __webpack_require__("./src/app/nix/core/dashboard/services/dashboard.service.ts");
let DashboardController = class DashboardController {
    constructor(dashbaordService) {
        this.dashbaordService = dashbaordService;
    }
    getDashboard(body) {
        return this.dashbaordService.getDashboardQuery(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DashboardController.prototype, "getDashboard", null);
DashboardController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ePlanixRoutes.dashboard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dashboard_service_1.DashboardService !== "undefined" && dashboard_service_1.DashboardService) === "function" ? _a : Object])
], DashboardController);
exports.DashboardController = DashboardController;


/***/ }),

/***/ "./src/app/nix/core/dashboard/dashboard.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const dashboard_service_1 = __webpack_require__("./src/app/nix/core/dashboard/services/dashboard.service.ts");
const dashboard_controller_1 = __webpack_require__("./src/app/nix/core/dashboard/controllers/dashboard.controller.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const data_entry_schema_1 = __webpack_require__("./src/app/nix/common/data-entry/data-entry.schema.ts");
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            dashboard_service_1.DashboardService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.dataEntryModel,
                modelSchema: data_entry_schema_1.dataEntrysSchema
            })
        ],
        controllers: [dashboard_controller_1.DashboardController]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;


/***/ }),

/***/ "./src/app/nix/core/dashboard/services/dashboard.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("mongoose");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
let DashboardService = class DashboardService {
    constructor(dataEntryModel) {
        this.dataEntryModel = dataEntryModel;
    }
    getDashboardQuery(query) {
        // console.log(query);
        var _a, _b;
        const match = {
            collectionDate: { $gte: new Date(query.sDate), $lte: new Date(query.eDate) },
            entryType: query.dataSource
        };
        if (query.sector !== null && query.sector !== '') {
            match.sector = new mongoose_1.Types.ObjectId(query.sector);
        }
        if (query.dataSource == 'outputEntry') {
            if (query.lga !== null && query.lga !== '') {
                match.lga = new mongoose_1.Types.ObjectId(query.lga);
            }
            if (query.lgaWard !== null && query.lgaWard !== '') {
                match.lgaWard = query.lgaWard;
            }
        }
        const unwind = query.dataSource == 'outcomeEntry' ?
            {
                $unwind: '$outcomeIndicators'
            } : {
            $unwind: '$outcomeOutputIndicators'
        };
        let _id = {
            sectorName: '$sectorName',
            collectionDate: { $dateTrunc: { date: "$collectionDate", unit: (_a = query.viewBy.replace('ly', '')) === null || _a === void 0 ? void 0 : _a.toLowerCase() } },
            lgaName: '$lgaName',
            lgaWard: '$lgaWard',
        };
        if (query.dataSource == 'outputEntry' && query.resultType == 'Charts') {
            _id = {
                sectorName: '$sectorName',
                collectionDate: { $dateTrunc: { date: "$collectionDate", unit: (_b = query.viewBy.replace('ly', '')) === null || _b === void 0 ? void 0 : _b.toLowerCase() } },
                lgaName: '$lgaName'
            };
        }
        let group = {
            _id: _id
        };
        if (query.dataSource == 'outcomeEntry') {
            group.indicators = { $push: '$outcomeIndicators' };
        }
        else {
            group.indicators = { $push: '$outcomeOutputIndicators' };
        }
        let viewByDate;
        let lastGroupStage = {
            data: {
                $push: {
                    collectionDate: '$collectionDate',
                    sectorName: '$sectorName',
                    lgaName: '$lgaName',
                    lgaWard: '$lgaWard',
                    indicators: '$indicators'
                }
            }
        };
        if (query.viewBy == 'Quarterly') {
            viewByDate = {
                $trunc: {
                    $add: [
                        {
                            $divide: [
                                {
                                    $subtract: [
                                        { $month: "$_id.collectionDate" },
                                        1
                                    ]
                                },
                                3
                            ]
                        },
                        1
                    ]
                }
            };
            lastGroupStage._id = {
                $concat: [
                    'Q',
                    { $toString: '$_id' },
                    ', ',
                    {
                        $dateToString: {
                            format: '%Y',
                            date: '$collectionDate'
                        }
                    }
                ]
            };
        }
        else if (query.viewBy == 'Monthly') {
            viewByDate = {
                $dateToString: {
                    format: '%b',
                    date: '$_id.collectionDate'
                }
            };
            lastGroupStage._id = {
                $concat: [
                    { $toString: '$_id' },
                    ', ',
                    {
                        $dateToString: {
                            format: '%Y',
                            date: '$collectionDate'
                        }
                    }
                ]
            };
        }
        else if (query.viewBy == 'Yearly') {
            viewByDate = {
                $dateToString: {
                    format: '%Y',
                    date: '$_id.collectionDate'
                }
            };
            lastGroupStage._id = '$_id';
        }
        if (query.resultType == 'Charts') {
            return this.dataEntryModel.aggregate([
                {
                    $match: match
                },
                {
                    $lookup: {
                        from: 'nix_sectors',
                        localField: 'sector',
                        foreignField: '_id',
                        as: 'sector',
                    }
                },
                {
                    $lookup: {
                        from: 'nix_lgas',
                        localField: 'lga',
                        foreignField: '_id',
                        as: 'lga',
                    }
                },
                unwind,
                {
                    $project: {
                        _id: '$_id',
                        collectionDate: '$collectionDate',
                        sectorName: {
                            $arrayElemAt: ['$sector.sectorName', 0]
                        },
                        lgaName: {
                            $arrayElemAt: ['$lga.lgaName', 0]
                        },
                        lgaWard: '$lgaWard',
                        outcomeIndicators: '$outcomeIndicators',
                        outcomeOutputIndicators: '$outcomeOutputIndicators',
                    }
                },
                {
                    $group: group
                },
                {
                    $project: {
                        _id: viewByDate,
                        sectorName: '$_id.sectorName',
                        lgaName: '$_id.lgaName',
                        lgaWard: '$_id.lgaWard',
                        collectionDate: '$_id.collectionDate',
                        indicators: {
                            $function: {
                                body: function (indicators, lgaName, id) {
                                    const groupObjArrayByAttr = (array, attr, k) => {
                                        return array
                                            .sort((a, b) => a.y - b.y)
                                            .reduce((r, a) => {
                                            const y = k ? a[attr][k] : a[attr];
                                            r[y] = r[y] || [];
                                            r[y].push(a);
                                            return r;
                                        }, Object.create(null));
                                    };
                                    indicators = indicators === null || indicators === void 0 ? void 0 : indicators.map((indicator) => {
                                        let outputInputs = indicator.outputIndicatorsInputs;
                                        outputInputs = outputInputs === null || outputInputs === void 0 ? void 0 : outputInputs.map((input) => {
                                            if (input.inputType == 'Number' && !isNaN(input.inputValue)) {
                                                input.inputValue = parseFloat(input.inputValue);
                                            }
                                            return {
                                                inputLabel: input.inputLabel,
                                                inputValue: input.inputValue,
                                            };
                                        });
                                        return {
                                            outcomeIndicator: indicator.outcomeIndicator,
                                            outputIndicatorsInputs: outputInputs
                                        };
                                    });
                                    const groupedIndicator = groupObjArrayByAttr(indicators, 'outcomeIndicator');
                                    const sumOutputGroup = [];
                                    for (const [key, value] of Object.entries(groupedIndicator)) {
                                        const val = value;
                                        let vals = [];
                                        val === null || val === void 0 ? void 0 : val.forEach((val) => { var _a; return vals = [...vals !== null && vals !== void 0 ? vals : [], ...(_a = val.outputIndicatorsInputs) !== null && _a !== void 0 ? _a : []]; });
                                        const label = 'inputLabel';
                                        vals = Object.values(vals.reduce((acc, curr) => {
                                            var _a;
                                            var _b;
                                            (_a = acc[_b = curr[label]]) !== null && _a !== void 0 ? _a : (acc[_b] = { [label]: curr[label] });
                                            Object.keys(curr).filter(k => k !== label).forEach(k => acc[curr[label]][k] = (acc[curr[label]][k] || 0) + curr[k]);
                                            return acc;
                                        }, {}));
                                        sumOutputGroup.push({
                                            outcomeIndicator: key,
                                            outputIndicatorsInputs: vals
                                        });
                                    }
                                    return sumOutputGroup;
                                },
                                args: ['$indicators', '$_id.lgaName', '$_id'],
                                lang: 'js'
                            }
                        }
                    }
                },
                {
                    $group: lastGroupStage
                },
                {
                    $unwind: {
                        path: '$data',
                        preserveNullAndEmptyArrays: true
                    },
                },
                {
                    $unwind: {
                        path: '$data.indicators',
                        preserveNullAndEmptyArrays: true
                    },
                },
                {
                    $unwind: {
                        path: '$data.indicators.outputIndicatorsInputs',
                        preserveNullAndEmptyArrays: true
                    },
                },
                {
                    $group: {
                        _id: {
                            outcome: '$data.indicators.outcomeIndicator',
                            lgaName: '$data.lgaName',
                            date: '$_id'
                        },
                        root: { $push: '$$ROOT' },
                        indicators: { $push: '$data.indicators.outputIndicatorsInputs' }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        indicators: {
                            $function: {
                                body: function (indicators, id) {
                                    return indicators.map((indic) => {
                                        var _a, _b;
                                        return {
                                            title: id.outcome + ' - ' + id.date,
                                            subTitle: indic.inputLabel + ' - ' + id.lgaName,
                                            groupTitle: indic.inputLabel + ' - ' + id.date,
                                            date: id.date,
                                            byDate: (_b = (_a = id.date) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.at(-1),
                                            outcome: id.outcome,
                                            lgaName: id.lgaName,
                                            group: id.outcome + ' - ' + id.date + ' - ' + indic.inputLabel,
                                            inputLabel: indic.inputLabel,
                                            inputValue: indic.inputValue,
                                        };
                                    });
                                },
                                args: ['$indicators', '$_id'],
                                lang: 'js'
                            }
                        }
                    }
                },
                {
                    $unwind: {
                        path: '$indicators',
                        preserveNullAndEmptyArrays: true
                    },
                },
                {
                    $group: {
                        _id: {
                            date: '$_id.date',
                            lgaName: '$indicators.lgaName',
                            label: '$indicators.inputLabel',
                        },
                        value: { $sum: '$indicators.inputValue' },
                        inputs: {
                            $push: '$$ROOT.indicators'
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            lgaName: '$_id.lgaName',
                            label: '$_id.label',
                        },
                        value: { $sum: '$value' },
                        inputs: {
                            $push: '$$ROOT.inputs'
                        }
                    }
                },
                {
                    $sort: {
                        '_id.label': 1
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        value: '$value',
                        inputs: {
                            $arrayElemAt: ['$inputs', 0]
                        }
                    }
                },
                {
                    $unwind: {
                        path: '$inputs',
                        preserveNullAndEmptyArrays: true
                    },
                },
                {
                    $group: {
                        _id: { $concat: ['$inputs.outcome', ' - ', '$inputs.date'] },
                        lgaNames: { $addToSet: '$inputs.lgaName' },
                        inputs: {
                            $push: '$inputs'
                        }
                    }
                },
                {
                    $sort: {
                        // _id: 1,
                        'inputs.byDate': 1
                    }
                }
                // {
                //   $group: {
                //     _id: viewByDate,
                //     otherIds: {
                //       $addToSet: {
                //         sector: '$_id.sectorName',
                //         lgaName: '$_id.lgaName'
                //       }
                //     },
                //     indicators: {
                //       $push:'$indicators'
                //     }
                //   }
                // },
                // {
                //   $unwind: '$otherIds'
                // },
                // {
                //   $group: {
                //     _id: {
                //       date: '$_id',
                //       lgaName: '$otherIds.lgaName'
                //     },
                //     indicators: {
                //       $addToSet: '$indicators'
                //     }
                //   }
                // },
                // {
                //   $project: {
                //     _id: '$_id',
                //     indicators: {
                //       $function: {
                //         body: function(indicators: any[], _id:any){
                //           indicators = indicators.flat();
                //           const groupObjArrayByAttr = (array: any[], attr: any, k?: any): any[] => {
                //             return array
                //               .sort((a,b)=> a.y - b.y)
                //               .reduce((r,a)=>{
                //                 const y = k ? a[attr][k] : a[attr];
                //                 r[y] = r[y] || [];
                //                 r[y].push(a);
                //                 return r;
                //               }, Object.create(null))
                //           }
                //           indicators = indicators?.map((indicator: any)=>{
                //             let outputInputs: any = indicator.outputIndicatorsInputs;
                //             // outputInputs = outputInputs?.map((input: any)=>{
                //             if(outputInputs.inputType == 'Number' && !isNaN(outputInputs.inputValue)) {
                //               outputInputs.inputValue = parseFloat(outputInputs.inputValue)
                //             }
                //             // return {
                //             //   inputLabel: outputInputs.inputLabel,
                //             //   inputValue: outputInputs.inputValue,
                //             //   // [input.inputLabel]: input.inputValue,
                //             // };
                //             // })
                //             return {
                //               outcomeIndicator: indicator.outcomeIndicator,
                //               outputIndicatorsInputs: outputInputs
                //             }
                //           });
                //           const groupedIndicator = groupObjArrayByAttr(indicators, 'outcomeIndicator')
                //           const sumOutputGroup: any[] = [];
                //           // let sum = 0;
                //           for (const [key, value] of Object.entries(groupedIndicator)) {
                //             let outputIndicatorsInputs: any[] = value;
                //             outputIndicatorsInputs = outputIndicatorsInputs.map((output)=>{
                //               return output.outputIndicatorsInputs
                //             })
                //             const outputsGrouped = groupObjArrayByAttr(outputIndicatorsInputs, 'inputLabel')
                //             let inputs: any[] = [];
                //             for (const [key, value] of Object.entries(outputsGrouped)) {
                //               let sum = 0
                //               if(Array.isArray(value)) {
                //                 for(let i = 0; i < value.length; i++) {
                //                   sum += value[i].inputValue;
                //                 }
                //               }
                //               inputs.push({
                //                 date: _id.date,
                //                 lgaName: _id.lgaName,
                //                 outcome: key,
                //                 label: key,
                //                 value: sum
                //               })
                //             }
                //             sumOutputGroup.push({
                //               date: _id.date,
                //               lgaName: _id.lgaName,
                //               outcome: key,
                //               outputs: inputs
                //             });
                //           }
                //           return sumOutputGroup;
                //           return groupedIndicator;
                //           return indicators
                //         },
                //         args: ['$indicators', '$_id'],
                //         lang: 'js'
                //       }
                //     }
                //   }
                // },
                // {
                //   $unwind: '$indicators'
                // },
                // {
                //   $unwind: '$indicators.outputs'
                // },
                // {
                //   $group: {
                //     _id: '$indicators.outcome',
                //     indicators: {$push:'$indicators.outputs'}
                //   }
                // }
            ]);
        }
        else
            return this.dataEntryModel.aggregate([
                {
                    $match: match
                },
                {
                    $lookup: {
                        from: 'nix_sectors',
                        localField: 'sector',
                        foreignField: '_id',
                        as: 'sector',
                    }
                },
                {
                    $lookup: {
                        from: 'nix_lgas',
                        localField: 'lga',
                        foreignField: '_id',
                        as: 'lga',
                    }
                },
                unwind,
                {
                    $project: {
                        _id: '$_id',
                        collectionDate: '$collectionDate',
                        sectorName: {
                            $arrayElemAt: ['$sector.sectorName', 0]
                        },
                        lgaName: {
                            $arrayElemAt: ['$lga.lgaName', 0]
                        },
                        lgaWard: '$lgaWard',
                        outcomeIndicators: '$outcomeIndicators',
                        outcomeOutputIndicators: '$outcomeOutputIndicators',
                    }
                },
                {
                    $group: group
                },
                {
                    $project: {
                        _id: viewByDate,
                        sectorName: '$_id.sectorName',
                        lgaName: '$_id.lgaName',
                        lgaWard: '$_id.lgaWard',
                        collectionDate: '$_id.collectionDate',
                        indicators: {
                            $function: {
                                body: function (indicators) {
                                    const groupObjArrayByAttr = (array, attr, k) => {
                                        return array
                                            .sort((a, b) => a.y - b.y)
                                            .reduce((r, a) => {
                                            const y = k ? a[attr][k] : a[attr];
                                            r[y] = r[y] || [];
                                            r[y].push(a);
                                            return r;
                                        }, Object.create(null));
                                    };
                                    indicators = indicators === null || indicators === void 0 ? void 0 : indicators.map((indicator) => {
                                        let outputInputs = indicator.outputIndicatorsInputs;
                                        outputInputs = outputInputs === null || outputInputs === void 0 ? void 0 : outputInputs.map((input) => {
                                            if (input.inputType == 'Number' && !isNaN(input.inputValue)) {
                                                input.inputValue = parseFloat(input.inputValue);
                                            }
                                            return {
                                                inputLabel: input.inputLabel,
                                                inputValue: input.inputValue,
                                                // [input.inputLabel]: input.inputValue,
                                            };
                                        });
                                        return {
                                            outcomeIndicator: indicator.outcomeIndicator,
                                            outputIndicatorsInputs: outputInputs
                                        };
                                    });
                                    const groupedIndicator = groupObjArrayByAttr(indicators, 'outcomeIndicator');
                                    const sumOutputGroup = [];
                                    for (const [key, value] of Object.entries(groupedIndicator)) {
                                        const val = value;
                                        let vals = [];
                                        val === null || val === void 0 ? void 0 : val.forEach((val) => { var _a; return vals = [...vals !== null && vals !== void 0 ? vals : [], ...(_a = val.outputIndicatorsInputs) !== null && _a !== void 0 ? _a : []]; });
                                        const label = 'inputLabel';
                                        vals = Object.values(vals.reduce((acc, curr) => {
                                            var _a;
                                            var _b;
                                            (_a = acc[_b = curr[label]]) !== null && _a !== void 0 ? _a : (acc[_b] = { [label]: curr[label] });
                                            Object.keys(curr).filter(k => k !== label).forEach(k => acc[curr[label]][k] = (acc[curr[label]][k] || 0) + curr[k]);
                                            return acc;
                                        }, {}));
                                        sumOutputGroup.push({
                                            outcomeIndicator: key,
                                            outputIndicatorsInputs: vals
                                        });
                                    }
                                    return sumOutputGroup;
                                },
                                args: ['$indicators'],
                                lang: 'js'
                            }
                        }
                    }
                },
                // {
                //   $sort: {
                //     'sectorName': 1
                //   }
                // },
                {
                    $group: lastGroupStage
                },
                {
                    $sort: {
                        'data.collectionDate': 1,
                    }
                }
            ]);
    }
};
DashboardService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.dataEntryModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object])
], DashboardService);
exports.DashboardService = DashboardService;


/***/ }),

/***/ "./src/app/nix/core/data-template/controllers/data-template.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTemplateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const data_template_service_1 = __webpack_require__("./src/app/nix/core/data-template/service/data-template.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let DataTemplateController = class DataTemplateController {
    constructor(dataTemplateService) {
        this.dataTemplateService = dataTemplateService;
    }
    saveTemplate(body) {
        return this.dataTemplateService.saveTemplate(body);
    }
    getDataTemplate(sectorId) {
        return this.dataTemplateService.getSectorDataTemplate(sectorId);
    }
    deleteTemplate(id) {
        return this.dataTemplateService.deleteTemplate(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DataTemplateController.prototype, "saveTemplate", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('sectorId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DataTemplateController.prototype, "getDataTemplate", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DataTemplateController.prototype, "deleteTemplate", null);
DataTemplateController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ePlanixRoutes.dataTemplate),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_template_service_1.DataTemplateService !== "undefined" && data_template_service_1.DataTemplateService) === "function" ? _a : Object])
], DataTemplateController);
exports.DataTemplateController = DataTemplateController;


/***/ }),

/***/ "./src/app/nix/core/data-template/data-template.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTemplateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const data_template_controller_1 = __webpack_require__("./src/app/nix/core/data-template/controllers/data-template.controller.ts");
const data_template_service_1 = __webpack_require__("./src/app/nix/core/data-template/service/data-template.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const data_template_schema_1 = __webpack_require__("./src/app/nix/core/data-template/data-template.schema.ts");
let DataTemplateModule = class DataTemplateModule {
};
DataTemplateModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [data_template_controller_1.DataTemplateController],
        providers: [
            data_template_service_1.DataTemplateService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.dataTemplateModel,
                modelSchema: data_template_schema_1.dataTetmplatesSchema
            }),
        ],
    })
], DataTemplateModule);
exports.DataTemplateModule = DataTemplateModule;


/***/ }),

/***/ "./src/app/nix/core/data-template/data-template.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataTetmplatesSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
// @Schema({
//   timestamps: true
// })
// export class DataTetmplate {
//   @Prop({
//     type: Types.ObjectId,
//     // ref: ENixDbModels.sectorsModel?.toLowerCase(),
//     ref: Sector.name,
//     required: true
//   })
//   sector: any;
//   @Prop({
//     type: Array,
//     required: true
//   })
//   outcomeIndicators: any[];
//   @Prop({
//     type: Array,
//     required: true
//   })
//   outcomeOutputIndicators: any[];
// }
// export type TDataTetmplateDocument = HydratedDocument<DataTetmplate>;
// export const dataTetmplatesSchema = SchemaFactory.createForClass(DataTetmplate);
exports.dataTetmplatesSchema = new mongoose_1.Schema({
    sector: {
        type: mongoose_1.Types.ObjectId,
        ref: nix_db_model_1.ENixDbModels.sectorsModel,
        required: true
    },
    outcomeIndicators: {
        type: Array
    },
    outcomeOutputIndicators: {
        type: Array,
        required: true
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/nix/core/data-template/service/data-template.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTemplateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const mongoose_1 = __webpack_require__("mongoose");
let DataTemplateService = class DataTemplateService {
    constructor(templatesModel) {
        this.templatesModel = templatesModel;
    }
    saveTemplate(Template) {
        if (Template._id)
            return this.templatesModel.findByIdAndUpdate(Template._id, Template, { new: true });
        return this.templatesModel.create(Template);
    }
    getSectorDataTemplate(sectorId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (sectorId == 'All')
                return this.templatesModel.find({}).populate([
                    {
                        path: 'sector',
                        model: nix_db_model_1.ENixDbModels.sectorsModel,
                        select: 'sectorName',
                    }
                ]);
            return this.templatesModel.findOne({ sector: sectorId }).populate([
                {
                    path: 'sector',
                    model: nix_db_model_1.ENixDbModels.sectorsModel,
                    select: 'sectorName',
                }
            ]);
        });
    }
    deleteTemplate(id) {
        return this.templatesModel.findByIdAndDelete(id, { new: true });
    }
};
DataTemplateService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.dataTemplateModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], DataTemplateService);
exports.DataTemplateService = DataTemplateService;


/***/ }),

/***/ "./src/app/nix/core/sectors/controllers/sector.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectorController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const sectors_service_1 = __webpack_require__("./src/app/nix/core/sectors/service/sectors.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SectorController = class SectorController {
    constructor(sectorsService) {
        this.sectorsService = sectorsService;
    }
    saveSector(body) {
        return this.sectorsService.saveSector(body);
    }
    getSectors() {
        return this.sectorsService.getSectors();
    }
    deleteSector(id) {
        return this.sectorsService.deleteSector(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SectorController.prototype, "saveSector", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SectorController.prototype, "getSectors", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('Admin', '*'),
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SectorController.prototype, "deleteSector", null);
SectorController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ePlanixRoutes.sector),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof sectors_service_1.SectorsService !== "undefined" && sectors_service_1.SectorsService) === "function" ? _a : Object])
], SectorController);
exports.SectorController = SectorController;


/***/ }),

/***/ "./src/app/nix/core/sectors/sectors.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectorsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const sector_controller_1 = __webpack_require__("./src/app/nix/core/sectors/controllers/sector.controller.ts");
const sectors_service_1 = __webpack_require__("./src/app/nix/core/sectors/service/sectors.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const sectors_schema_1 = __webpack_require__("./src/app/nix/core/sectors/sectors.schema.ts");
let SectorsModule = class SectorsModule {
};
SectorsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [sector_controller_1.SectorController],
        providers: [
            sectors_service_1.SectorsService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: nix_db_model_1.ENixDbModels.sectorsModel,
                modelSchema: sectors_schema_1.sectorsSchema
            }),
        ],
    })
], SectorsModule);
exports.SectorsModule = SectorsModule;


/***/ }),

/***/ "./src/app/nix/core/sectors/sectors.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sectorsSchema = exports.Sector = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Sector = class Sector {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], Sector.prototype, "sectorName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: Array
    }),
    tslib_1.__metadata("design:type", Array)
], Sector.prototype, "outcomeIndicators", void 0);
Sector = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Sector);
exports.Sector = Sector;
exports.sectorsSchema = mongoose_1.SchemaFactory.createForClass(Sector);


/***/ }),

/***/ "./src/app/nix/core/sectors/service/sectors.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectorsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nix_db_model_1 = __webpack_require__("./src/app/nix/nix-db.model.ts");
const mongoose_1 = __webpack_require__("mongoose");
let SectorsService = class SectorsService {
    constructor(sectorsModel) {
        this.sectorsModel = sectorsModel;
    }
    saveSector(sector) {
        if (sector._id)
            return this.sectorsModel.findByIdAndUpdate(sector._id, sector, { new: true });
        return this.sectorsModel.create(sector);
    }
    getSectors() {
        return this.sectorsModel.find({});
        // return this.sectorsModel.find({sectorName: {$ne: 'All'}});
    }
    deleteSector(id) {
        return this.sectorsModel.findByIdAndDelete(id, { new: true });
    }
};
SectorsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(nix_db_model_1.ENixDbModels.sectorsModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], SectorsService);
exports.SectorsService = SectorsService;


/***/ }),

/***/ "./src/app/nix/nix-db.model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENixDbModels = void 0;
var ENixDbModels;
(function (ENixDbModels) {
    ENixDbModels["userAccountModel"] = "Nix_UserAccount";
    ENixDbModels["userAccountCodeModel"] = "Nix_AccountCode";
    ENixDbModels["sectorsModel"] = "Nix_Sector";
    ENixDbModels["dataTemplateModel"] = "Nix_DataTemplate";
    ENixDbModels["lgaModel"] = "Nix_Lga";
    ENixDbModels["dataEntryModel"] = "Nix_DataEntry";
})(ENixDbModels = exports.ENixDbModels || (exports.ENixDbModels = {}));


/***/ }),

/***/ "./src/app/nix/nix.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NixModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_module_1 = __webpack_require__("./src/app/nix/common/user-account/user-account.module.ts");
const sectors_module_1 = __webpack_require__("./src/app/nix/core/sectors/sectors.module.ts");
const data_template_module_1 = __webpack_require__("./src/app/nix/core/data-template/data-template.module.ts");
const data_entry_module_1 = __webpack_require__("./src/app/nix/common/data-entry/data-entry.module.ts");
const dashboard_module_1 = __webpack_require__("./src/app/nix/core/dashboard/dashboard.module.ts");
let NixModule = class NixModule {
};
NixModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_account_module_1.UserAccountModule,
            sectors_module_1.SectorsModule,
            data_template_module_1.DataTemplateModule,
            data_entry_module_1.DataEntryModule,
            dashboard_module_1.DashboardModule
        ],
    })
], NixModule);
exports.NixModule = NixModule;


/***/ }),

/***/ "./src/app/nix/nix.routing.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NixModuleRouting = void 0;
const nix_module_1 = __webpack_require__("./src/app/nix/nix.module.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const user_account_module_1 = __webpack_require__("./src/app/nix/common/user-account/user-account.module.ts");
const sectors_module_1 = __webpack_require__("./src/app/nix/core/sectors/sectors.module.ts");
const data_template_module_1 = __webpack_require__("./src/app/nix/core/data-template/data-template.module.ts");
const data_entry_module_1 = __webpack_require__("./src/app/nix/common/data-entry/data-entry.module.ts");
const dashboard_module_1 = __webpack_require__("./src/app/nix/core/dashboard/dashboard.module.ts");
exports.NixModuleRouting = [
    {
        path: 'nix',
        module: nix_module_1.NixModule,
        children: [
            {
                path: (_a = lib_xUtils_1.ePlanixModules.ADMIN) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                module: dashboard_module_1.DashboardModule
            },
            {
                path: lib_xUtils_1.ECommonAppModule.Settings.toLowerCase(),
                module: user_account_module_1.UserAccountModule
            },
            {
                path: (_b = lib_xUtils_1.ePlanixModules.SECTORS) === null || _b === void 0 ? void 0 : _b.toLowerCase(),
                module: sectors_module_1.SectorsModule
            },
            {
                path: (_c = lib_xUtils_1.ePlanixModules.DATATEMPLATE) === null || _c === void 0 ? void 0 : _c.toLowerCase(),
                module: data_template_module_1.DataTemplateModule
            },
            {
                path: (_d = lib_xUtils_1.ePlanixModules.DATAENTRY) === null || _d === void 0 ? void 0 : _d.toLowerCase(),
                module: data_entry_module_1.DataEntryModule
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/rmd/common/game/controllers/game-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const game_query_service_1 = __webpack_require__("./src/app/rmd/common/game/services/game-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let GameQueryController = class GameQueryController {
    constructor(gameQueryService) {
        this.gameQueryService = gameQueryService;
    }
    games() {
        return this.gameQueryService.gameList();
    }
    getHistory(sDate, eDate) {
        return this.gameQueryService.gameHistory(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getGameHome() {
        return this.gameQueryService.gameHome();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.games),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "games", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.gameHistory),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "getHistory", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EGameQuery.gameHome),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GameQueryController.prototype, "getGameHome", null);
GameQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EGameQuery.gameQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof game_query_service_1.GameQueryService !== "undefined" && game_query_service_1.GameQueryService) === "function" ? _a : Object])
], GameQueryController);
exports.GameQueryController = GameQueryController;


/***/ }),

/***/ "./src/app/rmd/common/game/controllers/game-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const game_store_service_1 = __webpack_require__("./src/app/rmd/common/game/services/game-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let GameStoreController = class GameStoreController {
    constructor(gameStoreService) {
        this.gameStoreService = gameStoreService;
    }
    saveGame(game) {
        return this.gameStoreService.save(game);
    }
    deleteGame(gameId) {
        return this.gameStoreService.delete(gameId);
    }
    playGame(game) {
        return this.gameStoreService.playGame(game);
    }
    deleteHistory(type, id) {
        return this.gameStoreService.deleteHistory(id, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EGameStore.game),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IRmdGame !== "undefined" && lib_xUtils_1.IRmdGame) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "saveGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EGameStore.game + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "deleteGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Post)(lib_xUtils_1.EGameStore.gamePlay),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IRmdGamePlay !== "undefined" && lib_xUtils_1.IRmdGamePlay) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "playGame", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EGameStore.gameHistory + '/:id'),
    tslib_1.__param(0, (0, common_1.Query)('type')),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameStoreController.prototype, "deleteHistory", null);
GameStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EGameStore.gameStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof game_store_service_1.GameStoreService !== "undefined" && game_store_service_1.GameStoreService) === "function" ? _a : Object])
], GameStoreController);
exports.GameStoreController = GameStoreController;


/***/ }),

/***/ "./src/app/rmd/common/game/game.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const game_store_controller_1 = __webpack_require__("./src/app/rmd/common/game/controllers/game-store.controller.ts");
const game_query_controller_1 = __webpack_require__("./src/app/rmd/common/game/controllers/game-query.controller.ts");
const game_query_service_1 = __webpack_require__("./src/app/rmd/common/game/services/game-query.service.ts");
const game_store_service_1 = __webpack_require__("./src/app/rmd/common/game/services/game-store.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const game_schema_1 = __webpack_require__("./src/app/rmd/common/game/game.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/rmd/common/settings/settings.schema.ts");
// healMahTechAtEvenNodeDb
let GameModule = class GameModule {
};
GameModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [game_store_controller_1.GameStoreController, game_query_controller_1.GameQueryController],
        providers: [
            game_store_service_1.GameStoreService,
            game_query_service_1.GameQueryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.gameModel,
                modelSchema: game_schema_1.gameSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
        ],
    })
], GameModule);
exports.GameModule = GameModule;


/***/ }),

/***/ "./src/app/rmd/common/game/game.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gamePlayedSchema = exports.gameSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
exports.gameSchema = new mongoose_1.Schema({
    gameName: {
        type: String,
        required: true,
    },
    gameCost: {
        type: Number,
        required: true,
    },
    numOfTimes: Number,
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel
    },
    payMethod: String,
}, { timestamps: true });
exports.gamePlayedSchema = new mongoose_1.Schema({
    invoiceId: {
        type: String,
        required: true
    },
    player: String,
    gameItems: [exports.gameSchema],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel
    }
}, { timestamps: true });


/***/ }),

/***/ "./src/app/rmd/common/game/services/game-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let GameQueryService = class GameQueryService {
    constructor(gameModel, gamePlayedModel, systemConfigModel) {
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.systemConfigModel = systemConfigModel;
    }
    gameList() {
        return this.gameModel.find({});
    }
    gameHistory(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            if (!config)
                return;
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if (config.commissionRange == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if (config.commissionRange == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if (config.commissionRange == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            // const gamesStats = await this.gamePlayedModel.aggregate([
            //   {
            //     $match: {
            //       createdAt: dateRangeFilter
            //     }
            //   },
            //   {
            //     $unwind: '$gameItems'
            //   },
            //   {
            //     $match: {
            //       $and: [
            //         {'deleted': false},
            //         {'gameItems.deleted': false},
            //       ]
            //     }
            //   },
            //   {
            //     $group: {
            //       _id: null,
            //       count: {
            //         $sum: '$gameItems.numOfTimes'
            //       },
            //       amount: {
            //         $sum: {
            //           $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
            //         }
            //       }
            //     }
            //   }
            // ]);
            const gamesByPayMethod = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const gamesTotalAmount = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const history = yield this.gamePlayedModel.find({
                createdAt: dateRangeFilter,
            }).populate([
                {
                    path: 'userAccount',
                    model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                },
                {
                    path: 'gameItems.deletedBy',
                    model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                }
            ]);
            return {
                history,
                gamesTotalAmount: (gamesTotalAmount === null || gamesTotalAmount === void 0 ? void 0 : gamesTotalAmount.length) ? gamesTotalAmount[0] : {},
                gamesByPayMethod
            };
        });
    }
    gameHome() {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            if (!config)
                return;
            let dateRangeFilter = {};
            if (config.commissionRange == 'Daily') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                };
            }
            if (config.commissionRange == 'Weekly') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                };
            }
            if (config.commissionRange == 'Monthly') {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                    $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                };
            }
            const gamesCount = (_a = (yield this.gameModel.find({}))) === null || _a === void 0 ? void 0 : _a.length;
            const gamesStats = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: {
                            $sum: '$gameItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const popularGames = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.gameName',
                        count: {
                            $sum: '$gameItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 5
                }
            ]);
            return {
                gamesCount: gamesCount,
                gameStats: gamesStats.length ? gamesStats[0] : {},
                popularGames: popularGames
            };
        });
    }
};
GameQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gameModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gamePlayedModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.systemConfigModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], GameQueryService);
exports.GameQueryService = GameQueryService;


/***/ }),

/***/ "./src/app/rmd/common/game/services/game-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let GameStoreService = class GameStoreService {
    constructor(gameModel, gamePlayedModel, cls) {
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.cls = cls;
    }
    save(game) {
        if (game === null || game === void 0 ? void 0 : game._id)
            return this.gameModel.findByIdAndUpdate(game === null || game === void 0 ? void 0 : game._id, game);
        return this.gameModel.create(game);
    }
    delete(gameId) {
        if (this.cls.get('contextUser._id'))
            return this.gameModel.deleteById(gameId, this.cls.get('contextUser._id'));
        throw new Error('Invalid Authentication');
    }
    playGame(game) {
        game.userAccount = this.cls.get('contextUser._id');
        game.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
        return this.gamePlayedModel.create(game);
    }
    deleteHistory(id, type) {
        const userId = this.cls.get('contextUser._id');
        if (type == 'batch') {
            return this.gamePlayedModel.deleteById(id, userId);
        }
        return this.gamePlayedModel.findOneAndUpdate({
            'gameItems._id': { $in: [id] }
        }, {
            $set: {
                'gameItems.$.deleted': true,
                'gameItems.$.deletedBy': this.cls.get('contextUser._id'),
                'gameItems.$.deletedAt': new Date(),
            }
        }, {
            new: true,
            strict: false,
            strictQuery: false
        }).populate([
            {
                path: 'userAccount',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
            {
                path: 'gameItems.deletedBy',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            }
        ]);
    }
};
GameStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gameModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gamePlayedModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], GameStoreService);
exports.GameStoreService = GameStoreService;


/***/ }),

/***/ "./src/app/rmd/common/services/controllers/services-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const services_query_service_1 = __webpack_require__("./src/app/rmd/common/services/services/services-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let ServicesQueryController = class ServicesQueryController {
    constructor(servicesQueryService) {
        this.servicesQueryService = servicesQueryService;
    }
    getServices() {
        return this.servicesQueryService.getServices();
    }
    getDashboardServices(sDate, eDate, staffId) {
        return this.servicesQueryService.getRenderedDashboardService(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null, staffId);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EServicesQuery.getServices),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesQueryController.prototype, "getServices", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard', 'Basic'], "*"),
    (0, common_1.Get)(lib_xUtils_1.EServicesQuery.getRenderedDashoardService),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__param(2, (0, common_1.Query)('staffId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesQueryController.prototype, "getDashboardServices", null);
ServicesQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EServicesQuery.servicesQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_query_service_1.ServicesQueryService !== "undefined" && services_query_service_1.ServicesQueryService) === "function" ? _a : Object])
], ServicesQueryController);
exports.ServicesQueryController = ServicesQueryController;


/***/ }),

/***/ "./src/app/rmd/common/services/controllers/services-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const services_store_service_1 = __webpack_require__("./src/app/rmd/common/services/services/services-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let ServicesStoreController = class ServicesStoreController {
    constructor(servicesStoreService) {
        this.servicesStoreService = servicesStoreService;
    }
    saveService(serviceForm) {
        return this.servicesStoreService.saveServiceItem(serviceForm);
    }
    deleteService(serviceId) {
        return this.servicesStoreService.deleteService(serviceId);
    }
    renderService(renderedService, renderedBy) {
        renderedService.renderedBy = renderedBy;
        return this.servicesStoreService.renderService(renderedService);
    }
    deleteRenderedService(serviceId, batchId, type) {
        return this.servicesStoreService.deleteRenderedServices(batchId, serviceId, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EServicesStore.saveService),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "saveService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EServicesStore.deleteService + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "deleteService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EServicesStore.renderService),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Query)('renderedBy')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IServiceRendered !== "undefined" && lib_xUtils_1.IServiceRendered) === "function" ? _b : Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "renderService", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EServicesStore.deleteRenderedService + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('batchId')),
    tslib_1.__param(2, (0, common_1.Query)('type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesStoreController.prototype, "deleteRenderedService", null);
ServicesStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EServicesStore.servicesStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_store_service_1.ServicesStoreService !== "undefined" && services_store_service_1.ServicesStoreService) === "function" ? _a : Object])
], ServicesStoreController);
exports.ServicesStoreController = ServicesStoreController;


/***/ }),

/***/ "./src/app/rmd/common/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const services_store_controller_1 = __webpack_require__("./src/app/rmd/common/services/controllers/services-store.controller.ts");
const services_query_controller_1 = __webpack_require__("./src/app/rmd/common/services/controllers/services-query.controller.ts");
const services_store_service_1 = __webpack_require__("./src/app/rmd/common/services/services/services-store.service.ts");
const services_query_service_1 = __webpack_require__("./src/app/rmd/common/services/services/services-query.service.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const services_schema_1 = __webpack_require__("./src/app/rmd/common/services/services.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/rmd/common/settings/settings.schema.ts");
let ServicesModule = class ServicesModule {
};
ServicesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [services_store_controller_1.ServicesStoreController, services_query_controller_1.ServicesQueryController],
        providers: [services_store_service_1.ServicesStoreService, services_query_service_1.ServicesQueryService,
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceItemModel,
                modelSchema: services_schema_1.serviceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceRenderedItemModel,
                modelSchema: services_schema_1.renderedServiceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            })
        ]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./src/app/rmd/common/services/services.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serviceRenderedSchema = exports.renderedServiceItemSchema = exports.serviceItemSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
exports.serviceItemSchema = new mongoose_1.Schema({
    serviceName: {
        type: String,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
    serviceCommission: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.renderedServiceItemSchema = new mongoose_1.Schema({
    serviceName: {
        type: String,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
    serviceCommission: {
        type: Number,
        required: true
    },
    commissionAmount: {
        type: Number,
        required: true
    },
    numOfTimes: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    },
    payMethod: String
}, {
    timestamps: true
});
exports.serviceRenderedSchema = new mongoose_1.Schema({
    invoiceId: String,
    serviceItems: [exports.renderedServiceItemSchema],
    renderedBy: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
        required: true
    },
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel
    }
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/rmd/common/services/services/services-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const mongoose_1 = __webpack_require__("mongoose");
let ServicesQueryService = class ServicesQueryService {
    constructor(serviceItemModel, serviceRenderedModel, systemConfigModel) {
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.systemConfigModel = systemConfigModel;
    }
    getServices() {
        return this.serviceItemModel.find({});
    }
    getRenderedDashboardService(sDate, eDate, staffId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if (config.commissionRange == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if (config.commissionRange == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if (config.commissionRange == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const match = staffId && staffId !== 'undefined' ? {
                deleted: false,
                createdAt: dateRangeFilter,
                renderedBy: new mongoose_1.Types.ObjectId(staffId)
            } : {
                deleted: false,
                createdAt: dateRangeFilter
            };
            // console.log('hair ',dateRangeFilter, config.commissionRange, sDate, eDate, sDate == 'null' as any);
            const totalRenderedAmount = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems',
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                }
            ]);
            const renderedByCommission = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.serviceCommission',
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const renderedByPayMethod = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.payMethod',
                        cost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const renderedByStaff = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                },
                {
                    $lookup: {
                        from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'renderedBy',
                        foreignField: '_id', as: 'staff'
                    }
                },
                {
                    $group: {
                        _id: { $arrayElemAt: ['$staff._id', -1] },
                        serviceCost: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                        commissionAmount: {
                            $sum: {
                                $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                            },
                        },
                        staff: {
                            $addToSet: {
                                $arrayElemAt: ['$staff', -1]
                            }
                        },
                        services: {
                            $push: '$serviceItems'
                        }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        commissionAmount: '$commissionAmount',
                        serviceCost: '$serviceCost',
                        staff: {
                            $arrayElemAt: ['$staff', -1]
                        },
                        staffName: {
                            $concat: [
                                {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                },
                                " ",
                                {
                                    $arrayElemAt: ['$staff.surName', -1]
                                }
                            ]
                        },
                        services: '$services'
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);
            const dashboardServices = yield this.serviceRenderedModel.aggregate([
                {
                    $match: match
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $sort: { 'createdAt': 1 },
                },
                {
                    $lookup: {
                        from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'renderedBy',
                        foreignField: '_id', as: 'staff'
                    }
                },
                {
                    $lookup: {
                        from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'userAccount',
                        foreignField: '_id', as: 'userAccount'
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems._id',
                        batchId: { $push: '$_id' },
                        invoiceId: { $push: '$invoiceId' },
                        renderedBy: { $push: { $arrayElemAt: ['$staff', -1] } },
                        userAccount: { $push: { $arrayElemAt: ['$userAccount', -1] } },
                        serviceName: { $push: '$serviceItems.serviceName' },
                        serviceCost: { $push: '$serviceItems.serviceCost' },
                        serviceCommission: { $push: '$serviceItems.serviceCommission' },
                        commissionAmount: { $push: '$serviceItems.commissionAmount' },
                        numOfTimes: { $push: '$serviceItems.numOfTimes' },
                        payMethod: { $push: '$serviceItems.payMethod' },
                        createdAt: { $push: '$serviceItems.createdAt' },
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        invoiceId: { $arrayElemAt: ['$invoiceId', -1] },
                        batchId: { $arrayElemAt: ['$batchId', -1] },
                        renderedBy: { $arrayElemAt: ['$renderedBy', -1] },
                        userAccount: { $arrayElemAt: ['$userAccount.firstName', -1] },
                        serviceName: { $arrayElemAt: ['$serviceName', -1] },
                        serviceCost: { $arrayElemAt: ['$serviceCost', -1] },
                        serviceCommission: { $arrayElemAt: ['$serviceCommission', -1] },
                        commissionAmount: { $arrayElemAt: ['$commissionAmount', -1] },
                        numOfTimes: { $arrayElemAt: ['$numOfTimes', -1] },
                        payMethod: { $arrayElemAt: ['$payMethod', -1] },
                        createdAt: { $arrayElemAt: ['$createdAt', -1] },
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                }
            ]);
            const dashboardbatchServices = yield this.serviceRenderedModel.find(Object.assign({}, match)).populate([
                {
                    path: 'renderedBy',
                    model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                    select: 'email firstName surName',
                    options: { withDeleted: true },
                }
            ]);
            return {
                main: (totalRenderedAmount === null || totalRenderedAmount === void 0 ? void 0 : totalRenderedAmount.length) ? totalRenderedAmount[0] : {},
                byPayMethod: renderedByPayMethod,
                byCommission: renderedByCommission,
                byStaff: renderedByStaff,
                services: dashboardServices,
                byBatch: dashboardbatchServices
            };
        });
    }
};
ServicesQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceRenderedModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.systemConfigModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object])
], ServicesQueryService);
exports.ServicesQueryService = ServicesQueryService;


/***/ }),

/***/ "./src/app/rmd/common/services/services/services-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let ServicesStoreService = class ServicesStoreService {
    constructor(serviceItemModel, serviceRenderedModel, cls) {
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.cls = cls;
    }
    saveServiceItem(serviceItem) {
        if (serviceItem === null || serviceItem === void 0 ? void 0 : serviceItem._id) {
            return this.serviceItemModel.findByIdAndUpdate(serviceItem._id, serviceItem);
        }
        else {
            return this.serviceItemModel.create(serviceItem);
        }
    }
    deleteService(serviceId) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const service = yield this.serviceItemModel.deleteById(serviceId, (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id);
            if (service === null || service === void 0 ? void 0 : service.modifiedCount)
                return this.serviceItemModel.find({});
        });
    }
    renderService(serviceRendered) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Render Service Now');
            serviceRendered.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
            serviceRendered.userAccount = (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id;
            return (yield this.serviceRenderedModel.create(serviceRendered)).populate([
                {
                    path: 'renderedBy',
                    model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                    select: 'emai firstName surName',
                    options: { withDeleted: true },
                },
            ]);
        });
    }
    deleteRenderedServices(batchId, serviceId, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'single') {
                const deletion = yield this.serviceRenderedModel.findOneAndUpdate({
                    'serviceItems._id': { $in: [serviceId] }
                }, {
                    $set: {
                        'serviceItems.$.deleted': true,
                        'serviceItems.$.deletedBy': this.cls.get('contextUser._id'),
                        'serviceItems.$.deletedAt': new Date(),
                    }
                }, {
                    new: true,
                    strict: false,
                    strictQuery: false
                });
                return deletion;
            }
            else {
                return this.serviceRenderedModel.deleteById(batchId, this.cls.get('contextUser._id'));
            }
        });
    }
};
ServicesStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceRenderedModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], ServicesStoreService);
exports.ServicesStoreService = ServicesStoreService;


/***/ }),

/***/ "./src/app/rmd/common/settings/controllers/settings-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const settings_query_service_1 = __webpack_require__("./src/app/rmd/common/settings/services/settings-query.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsQueryController = class SettingsQueryController {
    constructor(settingsQueryService) {
        this.settingsQueryService = settingsQueryService;
    }
    getDeleted(sDate, eDate) {
        return this.settingsQueryService.getDeleted(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getSystemConfig() {
        return this.settingsQueryService.getSystemCnfig();
    }
    getExpenditures(sDate, eDate) {
        return this.settingsQueryService.getExpenditures(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getTodos(sDate, eDate) {
        return this.settingsQueryService.getTodos(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
    getStaffPay(sDate, eDate) {
        return this.settingsQueryService.getStaffPays(JSON.parse(sDate || '{}'), JSON.parse(eDate || '{}'));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getDeleted", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.getSettings),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getSystemConfig", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.expenditure),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getExpenditures", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.todo),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getTodos", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ESettingsQuery.staffPay),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsQueryController.prototype, "getStaffPay", null);
SettingsQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsQuery.settingsQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_query_service_1.SettingsQueryService !== "undefined" && settings_query_service_1.SettingsQueryService) === "function" ? _a : Object])
], SettingsQueryController);
exports.SettingsQueryController = SettingsQueryController;


/***/ }),

/***/ "./src/app/rmd/common/settings/controllers/settings-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const settings_store_service_1 = __webpack_require__("./src/app/rmd/common/settings/services/settings-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let SettingsStoreController = class SettingsStoreController {
    constructor(settingsStoreService) {
        this.settingsStoreService = settingsStoreService;
    }
    saveSetting(settings) {
        return this.settingsStoreService.saveSettings(settings);
    }
    saveExpense(expense) {
        return this.settingsStoreService.saveExpenditure(expense);
    }
    deleteExpenditure(expenseId) {
        return this.settingsStoreService.deleteExpenditure(expenseId);
    }
    saveTodo(todo) {
        return this.settingsStoreService.saveTodo(todo);
    }
    markTodoDone(todo) {
        return this.settingsStoreService.markTodoDone(todo);
    }
    deleteTodo(todoId) {
        return this.settingsStoreService.deleteTodo(todoId);
    }
    saveStaffPay(staffPay) {
        return this.settingsStoreService.saveStaffPay(staffPay);
    }
    deleteStaffPay(payId) {
        return this.settingsStoreService.deleteStaffPay(payId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.saveSettings),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.ISystemConfig !== "undefined" && lib_xUtils_1.ISystemConfig) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveSetting", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)("*", "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.expenditure),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IExpenditure !== "undefined" && lib_xUtils_1.IExpenditure) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveExpense", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.expenditure + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteExpenditure", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.todo),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof lib_xUtils_1.ITodo !== "undefined" && lib_xUtils_1.ITodo) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveTodo", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Put)(lib_xUtils_1.ESettingsStore.todo + '/:todo'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof lib_xUtils_1.ITodo !== "undefined" && lib_xUtils_1.ITodo) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "markTodoDone", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.todo + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteTodo", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], '*'),
    (0, common_1.Post)(lib_xUtils_1.ESettingsStore.staffPay),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof lib_xUtils_1.IRmdStaffPay !== "undefined" && lib_xUtils_1.IRmdStaffPay) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "saveStaffPay", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ESettingsStore.staffPay + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SettingsStoreController.prototype, "deleteStaffPay", null);
SettingsStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.ESettingsStore.settingsStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof settings_store_service_1.SettingsStoreService !== "undefined" && settings_store_service_1.SettingsStoreService) === "function" ? _a : Object])
], SettingsStoreController);
exports.SettingsStoreController = SettingsStoreController;


/***/ }),

/***/ "./src/app/rmd/common/settings/services/settings-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let SettingsQueryService = class SettingsQueryService {
    constructor(systemConfigModel, expenditureModel, stockItemModel, saleModel, serviceItemModel, serviceRenderedModel, gameModel, gamePlayedModel, userAccountModel, todoModel, staffPayModel) {
        this.systemConfigModel = systemConfigModel;
        this.expenditureModel = expenditureModel;
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.serviceItemModel = serviceItemModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.gameModel = gameModel;
        this.gamePlayedModel = gamePlayedModel;
        this.userAccountModel = userAccountModel;
        this.todoModel = todoModel;
        this.staffPayModel = staffPayModel;
    }
    getSystemCnfig() {
        return this.systemConfigModel.findOne();
    }
    getExpenditures(sDate, eDate) {
        return this.expenditureModel.find({
            expenseDate: {
                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate)),
            }
        }).populate([
            {
                path: 'userAccount',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
        ])
            .sort({
            createdAt: -1
        });
    }
    getTodos(sDate, eDate) {
        const dateRangeFilter = {
            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
        };
        return this.todoModel.find({
            createdAt: dateRangeFilter
        }).populate([
            {
                path: 'userAccount',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
            {
                path: 'todoDoneBy',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'email firstName surName',
                options: { withDeleted: true },
            },
        ])
            .sort({
            todoDone: 1,
            createdAt: -1
        });
    }
    getStaffPays(sDate, eDate) {
        const dateRangeFilter = {
            $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
            $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
        };
        return this.staffPayModel.aggregate([
            {
                $match: {
                    createdAt: dateRangeFilter
                }
            },
            {
                $lookup: {
                    from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                    localField: 'userAccount',
                    foreignField: '_id',
                    as: 'userAccount'
                }
            },
            {
                $lookup: {
                    from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                    localField: 'staff',
                    foreignField: '_id',
                    as: 'staff'
                }
            },
            {
                $group: {
                    _id: { $arrayElemAt: ['$staff._id', -1] },
                    staffPays: {
                        $addToSet: '$$ROOT'
                    },
                    payAmount: {
                        $sum: '$payAmount'
                    },
                    userAccount: {
                        $addToSet: { $arrayElemAt: ['$userAccount', -1] }
                    },
                    staff: {
                        $addToSet: { $arrayElemAt: ['$staff', -1] }
                    }
                }
            },
            {
                $lookup: {
                    localField: '_id',
                    foreignField: 'renderedBy',
                    from: rmd_db_model_1.ERmdDbModels.serviceRenderedModel.toLocaleLowerCase() + 's',
                    as: 'serviceCom',
                    pipeline: [
                        {
                            $match: {
                                createdAt: dateRangeFilter,
                            }
                        },
                        {
                            $unwind: '$serviceItems'
                        },
                        {
                            $match: {
                                $and: [
                                    { 'deleted': false },
                                    {
                                        $or: [
                                            { 'serviceItems.deleted': { $exists: false } },
                                            { 'serviceItems.deleted': !true },
                                        ],
                                    },
                                ]
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                commissionAmount: {
                                    $sum: {
                                        $multiply: ['$serviceItems.commissionAmount', '$serviceItems.numOfTimes']
                                    },
                                },
                            }
                        }
                    ]
                }
            },
            {
                $project: {
                    _id: '$_id',
                    payAmount: '$payAmount',
                    serviceCom: {
                        $cond: [
                            {
                                $ifNull: [{ $arrayElemAt: ['$serviceCom.commissionAmount', -1] }, false] //return value 'false' if null
                            },
                            { $arrayElemAt: ['$serviceCom.commissionAmount', -1] },
                            0, // if 'false'
                        ]
                    },
                    staffPays: '$staffPays',
                    staffName: {
                        $concat: [
                            {
                                $arrayElemAt: ['$staff.firstName', -1]
                            },
                            ' ',
                            {
                                $arrayElemAt: ['$staff.surName', -1]
                            },
                        ]
                    },
                    balance: {
                        $cond: [
                            {
                                $ifNull: [{ $arrayElemAt: ['$serviceCom.commissionAmount', -1] }, false] //return value 'false' if null
                            },
                            {
                                $subtract: [
                                    { $arrayElemAt: ['$serviceCom.commissionAmount', -1] },
                                    '$payAmount'
                                ],
                            },
                            'Unknown', // if 'false'
                        ]
                    }
                }
            },
            {
                $sort: {
                    staffName: 1
                }
            }
        ]);
    }
    getDeleted(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dateRangeFilter = {
                $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
            };
            let deleted = [];
            deleted = [...deleted, ...yield this.saleModel.aggregate([
                    {
                        $match: {
                            'saleItems.deleted': true,
                            'saleItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'saleItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$saleItems._id',
                            itemName: {
                                $push: '$saleItems.itemName'
                            },
                            quantity: {
                                $push: '$saleItems.quantity'
                            },
                            unitSellingPrice: {
                                $push: '$saleItems.unitSellingPrice'
                            },
                            deletedAt: {
                                $push: '$saleItems.deletedAt'
                            },
                            deletionDate: {
                                $push: '$saleItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: { $arrayElemAt: ['$deletedAt', -1] },
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$itemName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: { $arrayElemAt: ['$quantity', -1] }
                                    },
                                    ") @ N",
                                    {
                                        $toString: { $arrayElemAt: ['$unitSellingPrice', -1] }
                                    },
                                    "/1",
                                ]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            desc: '$desc',
                            deletedBy: '$deletedBy.firstName',
                            deletedAt: '$deletedAt',
                            deletionDate: '$deletionDate',
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.stockItemModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff', -1] },
                            desc: {
                                $concat: [
                                    '$itemName',
                                    " (",
                                    {
                                        $toString: '$quantity',
                                    },
                                    "qtty)",
                                    // {
                                    //   $toString: '$unitSellingPrice'
                                    // },
                                    // "/1",
                                ]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            desc: '$desc',
                            deletedBy: '$deletedBy.firstName',
                            deletedAt: '$deletedAt',
                            deletionDate: '$deletionDate',
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.saleModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$saleItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$saleItems.amount',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "itms) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceItemModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff.firstName', -1] },
                            desc: {
                                $concat: [
                                    '$serviceName',
                                    " (N",
                                    {
                                        $toString: '$serviceCost',
                                    },
                                    ") @",
                                    {
                                        $toString: '$serviceCommission',
                                    },
                                    "%",
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceRenderedModel.aggregate([
                    {
                        $match: {
                            'serviceItems.deleted': true,
                            'serviceItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$serviceItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'serviceItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$serviceItems._id',
                            serviceName: {
                                $push: '$serviceItems.serviceName'
                            },
                            numOfTimes: {
                                $sum: '$serviceItems.numOfTimes'
                            },
                            serviceCost: {
                                $sum: '$serviceItems.serviceCost'
                            },
                            serviceCommission: {
                                $sum: '$serviceItems.serviceCommission'
                            },
                            deletedAt: {
                                $push: '$serviceItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$serviceName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$numOfTimes'
                                    },
                                    "x) @ N",
                                    {
                                        $toString: '$serviceCost'
                                    },
                                    "/1 (",
                                    {
                                        $toString: '$serviceCommission'
                                    },
                                    "%)",
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.serviceRenderedModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$serviceItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$serviceItems.serviceCost',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "scs) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.gameModel.aggregateDeleted([
                    {
                        $match: {
                            'deleted': true,
                            'deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$staff.firstName', -1] },
                            desc: {
                                $concat: [
                                    '$gameName',
                                    " (N",
                                    {
                                        $toString: '$gameCost',
                                    },
                                    ')'
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.gamePlayedModel.aggregate([
                    {
                        $match: {
                            'gameItems.deleted': true,
                            'gameItems.deletedAt': dateRangeFilter,
                        }
                    },
                    {
                        $unwind: '$gameItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'gameItems.deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$gameItems._id',
                            gameName: {
                                $push: '$gameItems.gameName'
                            },
                            numOfTimes: {
                                $sum: '$gameItems.numOfTimes'
                            },
                            gameCost: {
                                $sum: '$gameItems.gameCost'
                            },
                            deletedAt: {
                                $push: '$gameItems.deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff.firstName', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy', -1] },
                            desc: {
                                $concat: [
                                    {
                                        $arrayElemAt: ['$gameName', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$numOfTimes'
                                    },
                                    "x) @ N",
                                    {
                                        $toString: '$gameCost'
                                    },
                                ]
                            }
                        }
                    },
                ])];
            deleted = [...deleted, ...yield this.gamePlayedModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $unwind: '$gameItems'
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            itemsCount: {
                                $sum: 1
                            },
                            amount: {
                                $sum: '$gameItems.gameCost',
                            },
                            invoiceId: {
                                $push: '$invoiceId'
                            },
                            deletedAt: {
                                $push: '$deletedAt'
                            },
                            deletedBy: {
                                $push: {
                                    $arrayElemAt: ['$staff', -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: { $arrayElemAt: ['$deletedAt', -1] },
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: { $arrayElemAt: ['$deletedBy.firstName', -1] },
                            desc: {
                                $concat: [
                                    "#",
                                    {
                                        $arrayElemAt: ['$invoiceId', -1]
                                    },
                                    " (",
                                    {
                                        $toString: '$itemsCount'
                                    },
                                    "gms) @ N",
                                    {
                                        $toString: '$amount'
                                    },
                                ]
                            }
                        }
                    },
                    {
                        $sort: {
                            deletedAt: -1
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.userAccountModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$deletedBy.firstName',
                            desc: {
                                $concat: [
                                    '$email',
                                    ' (',
                                    '$firstName',
                                    ') - ',
                                    '$acctType'
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.expenditureModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Exp - ',
                                    '$expenseRemark',
                                    ' (',
                                    'N',
                                    {
                                        $toString: '$expenseAmount'
                                    },
                                    ')',
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.todoModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Todo - ',
                                    '$todoNote',
                                    // ' (',
                                    // 'N',
                                    // {
                                    //   $toString: '$expenseAmount'
                                    // },
                                    // ')',
                                ]
                            }
                        }
                    }
                ])];
            deleted = [...deleted, ...yield this.staffPayModel.aggregateDeleted([
                    {
                        $match: {
                            deletedAt: dateRangeFilter
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'staff',
                            foreignField: '_id',
                            as: 'toStaff'
                        }
                    },
                    {
                        $lookup: {
                            from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                            localField: 'deletedBy',
                            foreignField: '_id', as: 'staff'
                        }
                    },
                    {
                        $project: {
                            _id: '$_id',
                            deletionDate: {
                                $dateToString: {
                                    format: '%Y-%m-%d - %H:%M',
                                    date: '$deletedAt',
                                    timezone: 'Africa/Lagos'
                                },
                            },
                            deletedAt: '$deletedAt',
                            deletedBy: '$staff.firstName',
                            desc: {
                                $concat: [
                                    'Payout @ ',
                                    { $arrayElemAt: ['$toStaff.firstName', -1] },
                                    ' (',
                                    'N',
                                    {
                                        $toString: '$payAmount'
                                    },
                                    ')',
                                ]
                            }
                        }
                    }
                ])];
            return (0, lib_xUtils_1.sortByAttribute)(deleted, '-deletedAt');
        });
    }
};
SettingsQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.systemConfigModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.expenditureModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.stockItemModel)),
    tslib_1.__param(3, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.saleModel)),
    tslib_1.__param(4, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceItemModel)),
    tslib_1.__param(5, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceRenderedModel)),
    tslib_1.__param(6, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gameModel)),
    tslib_1.__param(7, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gamePlayedModel)),
    tslib_1.__param(8, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.userAccountModel)),
    tslib_1.__param(9, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.todoModel)),
    tslib_1.__param(10, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object, typeof (_f = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _f : Object, typeof (_g = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _g : Object, typeof (_h = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _h : Object, typeof (_j = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _j : Object, typeof (_k = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _k : Object, typeof (_l = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _l : Object])
], SettingsQueryService);
exports.SettingsQueryService = SettingsQueryService;


/***/ }),

/***/ "./src/app/rmd/common/settings/services/settings-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let SettingsStoreService = class SettingsStoreService {
    constructor(systemConfigModel, expenditureModel, todoModel, staffPayModel, cls) {
        // const fnc = async()=>{
        // }
        // dbConnection.db.listCollections().forEach((col)=>{
        //   col.name
        // })
        // dbConnection.db.listCollections().toArray(function(err, names) {
        //   if (err) {
        //       console.log(err);
        //   }
        //   else {
        //       names.forEach(function(e,i,a) {
        //           // mongoose.connection.db.dropCollection(e.name);
        //           console.log("--->>", e.name);
        //       });
        //   }
        // })
        // console.log(dbConnection.db.collections().then((col)));
        // dbConnection.db.collections().then((col)=>{
        //   console.log(col.);
        this.systemConfigModel = systemConfigModel;
        this.expenditureModel = expenditureModel;
        this.todoModel = todoModel;
        this.staffPayModel = staffPayModel;
        this.cls = cls;
        // })
        // const cols = Array.from(dbConnection.collections)
        // console.log(dbConnection.collections, " COLLECTIONS");
        // const cols = Object.entries(dbConnection.collections).forEach((col)=>{
        // Object.entries(dbConnection.collections).forEach((col, i)=>{
        //   console.log('Col '+i, col[0]);
        // });
        // // console.log(cols, " COLLECTIONS");
        // console.log(dbConnection.c);
    }
    renameCollections() {
    }
    saveSettings(config) {
        if (config === null || config === void 0 ? void 0 : config._id) {
            return this.systemConfigModel.findByIdAndUpdate(config._id, config, {
                new: true
            });
        }
        else {
            return this.systemConfigModel.create(config);
        }
    }
    saveExpenditure(expense) {
        const userAccount = this.cls.get('contextUser._id');
        expense.userAccount = userAccount;
        return this.expenditureModel.create(expense);
    }
    deleteExpenditure(expenseId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.expenditureModel.deleteById(expenseId, userAccount);
    }
    saveTodo(todo) {
        const userAccount = this.cls.get('contextUser._id');
        todo.userAccount = userAccount;
        todo.todoDone = false;
        return this.todoModel.create(todo);
    }
    markTodoDone(todo) {
        todo.todoDoneBy = this.cls.get('contextUser._id');
        ;
        todo.todoDoneAt = new Date();
        todo.todoDone = true;
        return this.todoModel.findByIdAndUpdate(todo === null || todo === void 0 ? void 0 : todo._id, todo, { new: true });
    }
    deleteTodo(todoId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.todoModel.deleteById(todoId, userAccount);
    }
    saveStaffPay(pay) {
        const userAccount = this.cls.get('contextUser._id');
        pay.userAccount = userAccount;
        return this.staffPayModel.create(pay);
    }
    deleteStaffPay(payId) {
        const userAccount = this.cls.get('contextUser._id');
        return this.staffPayModel.deleteById(payId, userAccount);
    }
};
SettingsStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.systemConfigModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.expenditureModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.todoModel)),
    tslib_1.__param(3, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _e : Object])
], SettingsStoreService);
exports.SettingsStoreService = SettingsStoreService;


/***/ }),

/***/ "./src/app/rmd/common/settings/settings-module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const settings_query_service_1 = __webpack_require__("./src/app/rmd/common/settings/services/settings-query.service.ts");
const settings_store_service_1 = __webpack_require__("./src/app/rmd/common/settings/services/settings-store.service.ts");
const settings_store_controller_1 = __webpack_require__("./src/app/rmd/common/settings/controllers/settings-store.controller.ts");
const settings_query_controller_1 = __webpack_require__("./src/app/rmd/common/settings/controllers/settings-query.controller.ts");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const settings_schema_1 = __webpack_require__("./src/app/rmd/common/settings/settings.schema.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const account_schema_1 = __webpack_require__("./src/app/rmd/common/user-account/account.schema.ts");
const stocks_schema_1 = __webpack_require__("./src/app/rmd/common/stocks/stocks.schema.ts");
const services_schema_1 = __webpack_require__("./src/app/rmd/common/services/services.schema.ts");
const game_schema_1 = __webpack_require__("./src/app/rmd/common/game/game.schema.ts");
let SettingsModule = class SettingsModule {
};
SettingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            settings_query_service_1.SettingsQueryService,
            settings_store_service_1.SettingsStoreService,
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.expenditureModel,
                modelSchema: settings_schema_1.expenditureSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.userAccountModel,
                modelSchema: account_schema_1.accountSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.purchaseModel,
                modelSchema: stocks_schema_1.StockPurchaseSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.stockItemModel,
                modelSchema: stocks_schema_1.stockItemSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.saleModel,
                modelSchema: stocks_schema_1.stockSaleSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.saleItemModel,
                modelSchema: stocks_schema_1.saleItemSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceItemModel,
                modelSchema: services_schema_1.serviceItemSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.gameModel,
                modelSchema: game_schema_1.gameSchema
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.todoModel,
                modelSchema: settings_schema_1.todoSchema,
            }),
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.staffPayModel,
                modelSchema: settings_schema_1.staffPaySchema,
            }),
        ],
        controllers: [
            settings_store_controller_1.SettingsStoreController,
            settings_query_controller_1.SettingsQueryController
        ]
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;


/***/ }),

/***/ "./src/app/rmd/common/settings/settings.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.staffPaySchema = exports.todoSchema = exports.expenditureSchema = exports.systemConfigSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
exports.systemConfigSchema = new mongoose_1.Schema({
    commissionRange: {
        type: String,
        required: true
    },
    serviceCommissions: {
        type: [Number],
        required: true,
    },
    printType: String
}, {
    timestamps: true
});
exports.expenditureSchema = new mongoose_1.Schema({
    expenseAmount: {
        type: Number,
        required: true
    },
    expenseRemark: {
        type: String,
        required: true
    },
    expenseDate: {
        type: Date,
        required: true
    },
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel
    }
}, { timestamps: true });
exports.todoSchema = new mongoose_1.Schema({
    todoNote: {
        type: String,
        required: true
    },
    todoDone: {
        type: Boolean,
        required: true,
        default: false
    },
    todoDoneAt: {
        type: Date,
        default: new Date(),
    },
    todoDoneBy: {
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
        type: mongoose_1.Types.ObjectId
    },
    userAccount: {
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
        type: mongoose_1.Types.ObjectId
    }
}, { timestamps: true });
exports.staffPaySchema = new mongoose_1.Schema({
    payAmount: {
        type: Number,
        required: true
    },
    staff: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
        required: true
    },
    payRemark: String,
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
    },
}, { timestamps: true });


/***/ }),

/***/ "./src/app/rmd/common/stocks/controllers/stocks-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const stocks_query_service_1 = __webpack_require__("./src/app/rmd/common/stocks/services/stocks-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let StocksQueryController = class StocksQueryController {
    constructor(stocksQueryService) {
        this.stocksQueryService = stocksQueryService;
    }
    getOverview(sDate, eDate) {
        return this.stocksQueryService.getOverview(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getPurchases(stockItemId) {
        if (stockItemId)
            return this.stocksQueryService.getStockItemPurchase(stockItemId);
        return this.stocksQueryService.getPurchases();
    }
    getSaleItems() {
        return this.stocksQueryService.getSaleItems();
    }
    // @Get(EInventoryStockQuery.allStocks)
    // getAllStocks() {
    //   return this.stocksQueryService.getAllStocks()
    // }
    getActiveStockItems(queryType) {
        return this.stocksQueryService.getActiveStocks(queryType);
    }
    getDashboardSale(sDate, eDate) {
        return this.stocksQueryService.getDashboardSale(sDate !== 'undefined' ? JSON.parse(sDate || '{}') : null, eDate !== 'undefined' ? JSON.parse(eDate || '{}') : null);
    }
    getOldStockItems() {
        return this.stocksQueryService.getOldStockItems();
    }
    getOutOfStock(osType) {
        return this.stocksQueryService.getOutOfStock(osType);
    }
    getPreviousVendors() {
        return this.stocksQueryService.getPreviousVendors();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOverview", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.stockPurchase),
    tslib_1.__param(0, (0, common_1.Query)('stockItemId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getPurchases", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ERmdDispensaryQuery.saleItems),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getSaleItems", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Standard', 'Super'], '*'),
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.activeStocks),
    tslib_1.__param(0, (0, common_1.Query)('query-type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getActiveStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.ECinDispensaryQuery.dispenseHistory),
    tslib_1.__param(0, (0, common_1.Query)('sDate')),
    tslib_1.__param(1, (0, common_1.Query)('eDate')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getDashboardSale", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.oldStocks),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOldStockItems", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.outOfStocks),
    tslib_1.__param(0, (0, common_1.Query)('os-type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getOutOfStock", null);
tslib_1.__decorate([
    (0, common_1.Get)(lib_xUtils_1.EInventoryStockQuery.purchaseVendors),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StocksQueryController.prototype, "getPreviousVendors", null);
StocksQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockQuery.stockQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stocks_query_service_1.StocksQueryService !== "undefined" && stocks_query_service_1.StocksQueryService) === "function" ? _a : Object])
], StocksQueryController);
exports.StocksQueryController = StocksQueryController;


/***/ }),

/***/ "./src/app/rmd/common/stocks/controllers/stocks-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const stocks_store_service_1 = __webpack_require__("./src/app/rmd/common/stocks/services/stocks-store.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
let StocksStoreController = class StocksStoreController {
    constructor(stocksStoreService) {
        this.stocksStoreService = stocksStoreService;
    }
    savePurchase(purchase) {
        return this.stocksStoreService.savePurchase(purchase);
    }
    deleteStock(stockId) {
        return this.stocksStoreService.deleteStockItem(stockId);
    }
    sellStock(stock) {
        return this.stocksStoreService.sellStock(stock);
    }
    deleteSoldStock(stockId, batchId, type) {
        return this.stocksStoreService.deleteSoldStock(batchId, stockId, type);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Post)(lib_xUtils_1.EInventoryStockStore.stockPurchase),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lib_xUtils_1.IRmdStockPurchase !== "undefined" && lib_xUtils_1.IRmdStockPurchase) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "savePurchase", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.EInventoryStockStore.stockPurchase + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "deleteStock", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super', 'Standard'], "*"),
    (0, common_1.Post)(lib_xUtils_1.ECinDispensaryStore.dispenseOrder),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof lib_xUtils_1.IRmdSale !== "undefined" && lib_xUtils_1.IRmdSale) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "sellStock", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], "*"),
    (0, common_1.Delete)(lib_xUtils_1.ECinDispensaryStore.returnSaleItems + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Query)('batchId')),
    tslib_1.__param(2, (0, common_1.Query)('type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], StocksStoreController.prototype, "deleteSoldStock", null);
StocksStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EInventoryStockStore.stockStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof stocks_store_service_1.StocksStoreService !== "undefined" && stocks_store_service_1.StocksStoreService) === "function" ? _a : Object])
], StocksStoreController);
exports.StocksStoreController = StocksStoreController;


/***/ }),

/***/ "./src/app/rmd/common/stocks/services/stocks-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const date_fns_1 = __webpack_require__("date-fns");
let StocksQueryService = class StocksQueryService {
    constructor(stockItemModel, saleModel, systemConfigModel, purchaseModel, serviceRenderedModel, gamePlayedModel, expenditureModel, staffPayModel) {
        this.stockItemModel = stockItemModel;
        this.saleModel = saleModel;
        this.systemConfigModel = systemConfigModel;
        this.purchaseModel = purchaseModel;
        this.serviceRenderedModel = serviceRenderedModel;
        this.gamePlayedModel = gamePlayedModel;
        this.expenditureModel = expenditureModel;
        this.staffPayModel = staffPayModel;
    }
    getOverview(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const totalSaleAmount = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $or: [
                            { 'saleItems.deleted': { $exists: false } },
                            { 'saleItems.deleted': !true },
                        ],
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const totalRenderedAmount = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems',
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'serviceItems.deleted': false},
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        }
                    }
                }
            ]);
            const totalGameAmount = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            // {'gameItems.deleted': false},
                            {
                                $or: [
                                    { 'gameItems.deleted': { $exists: false } },
                                    { 'gameItems.deleted': !true },
                                ],
                            },
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const totalExpenseAmount = yield this.expenditureModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $match: {
                        'deleted': false,
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$expenseAmount',
                        },
                    }
                }
            ]);
            const saleByPayMethod = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$saleItems.payMethod',
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const serviceByPayMethod = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                            // {'serviceItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            },
                        },
                    }
                },
            ]);
            const gamesByPayMethod = yield this.gamePlayedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$gameItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            { 'gameItems.deleted': false },
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$gameItems.payMethod',
                        amount: {
                            $sum: {
                                $multiply: ['$gameItems.gameCost', '$gameItems.numOfTimes']
                            }
                        }
                    }
                }
            ]);
            const popularServices = yield this.serviceRenderedModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$serviceItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'serviceItems.deleted': { $exists: false } },
                                    { 'serviceItems.deleted': !true },
                                ],
                            },
                            // {'serviceItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$serviceItems.serviceName',
                        count: {
                            $sum: '$serviceItems.numOfTimes'
                        },
                        amount: {
                            $sum: {
                                $multiply: ['$serviceItems.serviceCost', '$serviceItems.numOfTimes']
                            }
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 5
                }
            ]);
            const totalPayoutAmount = yield this.staffPayModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $match: {
                        'deleted': false,
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$payAmount',
                        },
                    }
                }
            ]);
            return {
                totalSaleAmount: (totalSaleAmount === null || totalSaleAmount === void 0 ? void 0 : totalSaleAmount.length) ? totalSaleAmount[0] : {},
                totalRenderedAmount: (totalRenderedAmount === null || totalRenderedAmount === void 0 ? void 0 : totalRenderedAmount.length) ? totalRenderedAmount[0] : {},
                totalGameAmount: (totalGameAmount === null || totalGameAmount === void 0 ? void 0 : totalGameAmount.length) ? totalGameAmount[0] : {},
                totalExpenseAmount: (totalExpenseAmount === null || totalExpenseAmount === void 0 ? void 0 : totalExpenseAmount.length) ? totalExpenseAmount[0] : {},
                totalPayoutAmount: (totalPayoutAmount === null || totalPayoutAmount === void 0 ? void 0 : totalPayoutAmount.length) ? totalPayoutAmount[0] : {},
                saleByPayMethod,
                serviceByPayMethod,
                gamesByPayMethod,
                // popularStaff,
                popularServices
            };
        });
    }
    getPurchases() {
        return this.purchaseModel.find({}).sort({ createdAt: -1 })
            .populate([
            {
                path: 'itemsPurchased',
                model: rmd_db_model_1.ERmdDbModels.stockItemModel,
            },
            {
                path: 'userAccount',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
        ;
    }
    getSaleItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.stockItemModel.aggregate([
                {
                    $match: {
                        quantity: {
                            $gte: 1
                        },
                    }
                },
                {
                    $sort: {
                        createdAt: -1
                    }
                },
                {
                    $group: {
                        _id: '$itemName',
                        id: {
                            $push: '$_id'
                        },
                        quantity: {
                            $sum: '$quantity'
                        },
                        itemName: {
                            $push: '$itemName'
                        },
                        unitCostPrice: {
                            $push: '$unitCostPrice'
                        },
                        unitSellingPrice: {
                            $push: '$unitSellingPrice'
                        },
                        createdAt: {
                            $push: '$createdAt'
                        },
                    }
                },
                {
                    $project: {
                        _id: {
                            $arrayElemAt: ['$id', 0]
                        },
                        itemName: {
                            $arrayElemAt: ['$itemName', 0]
                        },
                        quantity: '$quantity',
                        unitCostPrice: {
                            $arrayElemAt: ['$unitCostPrice', 0]
                        },
                        unitSellingPrice: {
                            $arrayElemAt: ['$unitSellingPrice', 0]
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0]
                        },
                        expiryDate: {
                            $arrayElemAt: ['$expiryDate', 0]
                        },
                    }
                }
            ]);
        });
    }
    // getAllStocks() {
    //   return this.stockItemModel.find({}).sort({itemName: 1})
    // }
    getActiveStocks(type = 'single') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'multiple')
                return this.stockItemModel.find({
                    quantity: {
                        $gte: 1
                    }
                }).sort({
                    itemName: 1,
                    createdAt: -1
                });
            else
                return this.stockItemModel.aggregate([
                    {
                        $match: {
                            quantity: {
                                $gte: 1
                            }
                        }
                    },
                    {
                        $sort: {
                            createdAt: -1
                        }
                    },
                    {
                        $group: {
                            _id: '$itemName',
                            id: {
                                $push: '$_id'
                            },
                            quantity: {
                                $sum: '$quantity'
                            },
                            itemName: {
                                $push: '$itemName'
                            },
                            unitCostPrice: {
                                $push: '$unitCostPrice'
                            },
                            unitSellingPrice: {
                                $push: '$unitSellingPrice'
                            },
                            createdAt: {
                                $push: '$createdAt'
                            },
                            expiryDate: {
                                $push: '$expiryDate'
                            }
                        }
                    },
                    {
                        $project: {
                            _id: {
                                $arrayElemAt: ['$id', 0]
                            },
                            itemName: {
                                $arrayElemAt: ['$itemName', 0]
                            },
                            quantity: '$quantity',
                            unitCostPrice: {
                                $arrayElemAt: ['$unitCostPrice', 0]
                            },
                            unitSellingPrice: {
                                $arrayElemAt: ['$unitSellingPrice', 0]
                            },
                            createdAt: {
                                $arrayElemAt: ['$createdAt', 0]
                            },
                            expiryDate: {
                                $arrayElemAt: ['$expiryDate', 0]
                            },
                        }
                    },
                    {
                        $sort: {
                            itemName: 1
                        }
                    }
                ]);
        });
    }
    getStockItemPurchase(stockItemId) {
        return this.purchaseModel.findOne({
            itemsPurchased: stockItemId
        })
            .populate([
            {
                path: 'itemsPurchased',
                model: rmd_db_model_1.ERmdDbModels.stockItemModel,
            },
            {
                path: 'userAccount',
                model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                select: 'acctType email userName firstName surName appModule shopBranch',
                options: { withDeleted: true },
            },
        ]);
    }
    getOldStockItems() {
        return this.stockItemModel.aggregate([
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $group: {
                    _id: '$itemName',
                    unitCostPrice: { $addToSet: '$unitCostPrice' },
                    unitSellingPrice: { $addToSet: '$unitSellingPrice' },
                },
            },
            {
                $project: {
                    _id: '$_id',
                    unitCostPrice: { $arrayElemAt: ['$unitCostPrice', 0] },
                    unitSellingPrice: { $arrayElemAt: ['$unitSellingPrice', 0] },
                },
            },
        ]);
    }
    getOutOfStock(osType) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const outOfStocks = [];
            const sales = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: (0, date_fns_1.subWeeks)(new Date(), 6),
                        },
                    },
                },
                {
                    $unwind: '$saleItems',
                },
                {
                    $group: {
                        _id: '$saleItems.itemName',
                        quantity: { $push: '$saleItems.quantity' }
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        quantity: {
                            $add: [{ $toInt: { $avg: '$quantity' } }, 1]
                        }
                    }
                }
            ]);
            for (let i = 0; i < sales.length; i++) {
                const stockItem = yield this.stockItemModel.aggregate([
                    {
                        $match: {
                            itemName: (_a = sales[i]) === null || _a === void 0 ? void 0 : _a._id,
                        },
                    },
                    {
                        $sort: {
                            createdAt: -1,
                        },
                    },
                    {
                        $group: {
                            _id: '$itemName',
                            quantity: { $sum: '$quantity' },
                            createdAt: { $push: '$createdAt' },
                            expiryDate: { $push: '$expiryDate' },
                            unitCostPrice: { $push: '$unitCostPrice' },
                        },
                    },
                    {
                        $match: {
                            quantity: osType == 'os'
                                ? { $lte: 0 }
                                : { $lte: (_b = sales[i]) === null || _b === void 0 ? void 0 : _b.quantity, $gt: 0 },
                        },
                    },
                    {
                        $project: {
                            _id: '$_id',
                            quantity: '$quantity',
                            expiryDate: { $arrayElemAt: ['$expiryDate', 0] },
                            createdAt: { $arrayElemAt: ['$createdAt', 0] },
                            unitCostPrice: { $avg: '$unitCostPrice' },
                        },
                    },
                ]);
                if (stockItem && stockItem.length) {
                    stockItem[0].avgCons = sales[0].quantity,
                        stockItem[0].avgCost =
                            stockItem[0].unitCostPrice * stockItem[0].avgCons;
                    outOfStocks.push(stockItem[0]);
                }
            }
            // console.log(osType, outOfStocks);
            return outOfStocks;
        });
    }
    getPreviousVendors() {
        return this.purchaseModel.aggregate([
            {
                $group: {
                    _id: '$vendor'
                }
            }
        ]);
    }
    getDashboardSale(sDate, eDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const config = yield this.systemConfigModel.findOne({});
            let dateRangeFilter = {};
            if (!sDate || !eDate) {
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Daily') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Weekly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfWeek)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfWeek)(new Date())
                    };
                }
                if ((config === null || config === void 0 ? void 0 : config.commissionRange) == 'Monthly') {
                    dateRangeFilter = {
                        $gte: (0, lib_xUtils_1.getZonedStartOfMonth)(new Date()),
                        $lte: (0, lib_xUtils_1.getZonedEndOfMonth)(new Date())
                    };
                }
            }
            else {
                dateRangeFilter = {
                    $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date(sDate)),
                    $lte: (0, lib_xUtils_1.getZonedEndOfDay)(new Date(eDate))
                };
            }
            const saleByPayMethod = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$saleItems.payMethod',
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                    }
                }
            ]);
            const saleTotal = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $group: {
                        _id: null,
                        amount: {
                            $sum: '$saleItems.amount',
                        },
                        profit: {
                            $sum: {
                                $subtract: [
                                    '$saleItems.amount',
                                    {
                                        $multiply: [
                                            '$saleItems.unitCostPrice',
                                            '$saleItems.quantity',
                                        ],
                                    },
                                ],
                            }
                        }
                    }
                }
            ]);
            const sales = yield this.saleModel.aggregate([
                {
                    $match: {
                        createdAt: dateRangeFilter
                    }
                },
                {
                    $unwind: '$saleItems'
                },
                {
                    $match: {
                        $and: [
                            { 'deleted': false },
                            {
                                $or: [
                                    { 'saleItems.deleted': { $exists: false } },
                                    { 'saleItems.deleted': !true },
                                ],
                            },
                            // {'saleItems.deleted': false},
                        ]
                    }
                },
                {
                    $lookup: {
                        from: rmd_db_model_1.ERmdDbModels.userAccountModel.toLocaleLowerCase() + 's',
                        localField: 'userAccount',
                        foreignField: '_id', as: 'userAccount'
                    }
                },
                {
                    $group: {
                        _id: '$saleItems._id',
                        invoiceId: { $push: '$invoiceId' },
                        batchId: { $push: '$_id' },
                        itemName: { $push: '$saleItems.itemName' },
                        itemId: { $push: '$saleItems.itemId' },
                        quantity: { $push: '$saleItems.quantity' },
                        payMethod: { $push: '$saleItems.payMethod' },
                        unitCostPrice: { $push: '$saleItems.unitCostPrice' },
                        unitSellingPrice: { $push: '$saleItems.unitSellingPrice' },
                        amount: { $push: '$saleItems.amount' },
                        userAccount: {
                            $push: '$userAccount.firstName'
                        },
                        createdAt: { $push: '$createdAt' },
                    }
                },
                {
                    $project: {
                        _id: '$_id',
                        invoiceId: { $arrayElemAt: ['$invoiceId', -1] },
                        batchId: { $arrayElemAt: ['$batchId', -1] },
                        itemName: { $arrayElemAt: ['$itemName', -1] },
                        itemId: { $arrayElemAt: ['$itemId', -1] },
                        quantity: { $arrayElemAt: ['$quantity', -1] },
                        unitCostPrice: { $arrayElemAt: ['$unitCostPrice', -1] },
                        unitSellingPrice: { $arrayElemAt: ['$unitSellingPrice', -1] },
                        amount: { $arrayElemAt: ['$amount', -1] },
                        payMethod: { $arrayElemAt: ['$payMethod', -1] },
                        userAccount: { $arrayElemAt: [{ $arrayElemAt: ['$userAccount', -1] }, -1] },
                        createdAt: { $arrayElemAt: ['$createdAt', -1] },
                    }
                },
                {
                    $sort: {
                        createdAt: 1
                    }
                }
            ]);
            return {
                main: (saleTotal === null || saleTotal === void 0 ? void 0 : saleTotal.length) ? saleTotal[0] : {},
                byPayMethod: saleByPayMethod,
                sales
            };
        });
    }
};
StocksQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.saleModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.systemConfigModel)),
    tslib_1.__param(3, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.purchaseModel)),
    tslib_1.__param(4, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.serviceRenderedModel)),
    tslib_1.__param(5, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.gamePlayedModel)),
    tslib_1.__param(6, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.expenditureModel)),
    tslib_1.__param(7, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.staffPayModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _d : Object, typeof (_e = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _e : Object, typeof (_f = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _f : Object, typeof (_g = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _g : Object, typeof (_h = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _h : Object])
], StocksQueryService);
exports.StocksQueryService = StocksQueryService;


/***/ }),

/***/ "./src/app/rmd/common/stocks/services/stocks-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const date_fns_1 = __webpack_require__("date-fns");
let StocksStoreService = class StocksStoreService {
    constructor(stockItemModel, purchaseModel, saleModel, cls) {
        this.stockItemModel = stockItemModel;
        this.purchaseModel = purchaseModel;
        this.saleModel = saleModel;
        this.cls = cls;
    }
    savePurchase(purchase) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (purchase === null || purchase === void 0 ? void 0 : purchase.id) {
                const items = [];
                const stockItemsToEdit = purchase.itemsPurchased.filter((item) => item === null || item === void 0 ? void 0 : item.id);
                const stockItemsToCreate = purchase.itemsPurchased.filter((item) => !(item === null || item === void 0 ? void 0 : item.id));
                if (stockItemsToCreate === null || stockItemsToCreate === void 0 ? void 0 : stockItemsToCreate.length) {
                    const itemsToCreate = yield this.stockItemModel.create(stockItemsToCreate);
                    console.log(itemsToCreate);
                    return;
                    itemsToCreate === null || itemsToCreate === void 0 ? void 0 : itemsToCreate.forEach((item) => {
                        delete item['id'];
                        items.push(item._id);
                    });
                }
                if (stockItemsToEdit === null || stockItemsToEdit === void 0 ? void 0 : stockItemsToEdit.length) {
                    for (let i = 0; i < stockItemsToEdit.length; i++) {
                        const itemToEdit = yield this.stockItemModel.findByIdAndUpdate((_a = stockItemsToEdit[i]) === null || _a === void 0 ? void 0 : _a.id, stockItemsToEdit[i], {
                            new: true
                        });
                        itemToEdit ? items.push(itemToEdit === null || itemToEdit === void 0 ? void 0 : itemToEdit._id) : null;
                    }
                }
                purchase.userAccount = this.cls.get('contextUser._id');
                purchase.itemsPurchased = items;
                return this.purchaseModel
                    .findByIdAndUpdate(purchase.id, purchase, {
                    new: true,
                })
                    .populate([
                    {
                        path: 'itemsPurchased',
                        model: rmd_db_model_1.ERmdDbModels.stockItemModel,
                    },
                    {
                        path: 'userAccount',
                        model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            else {
                const purchaseExist = yield this.purchaseModel.find({
                    vendor: purchase.vendor,
                    itemsPurchased: { $size: purchase.itemsPurchased.length },
                    createdAt: {
                        $gte: (0, lib_xUtils_1.getZonedStartOfDay)(new Date())
                    }
                });
                if (purchaseExist) {
                    for (let i = 0; i < purchaseExist.length; i++) {
                        const minuteDiff = (0, date_fns_1.differenceInMinutes)(new Date(), new Date(purchaseExist[i].createdAt));
                        console.log(minuteDiff, purchaseExist[i].createdAt);
                        if (minuteDiff < 10) {
                            throw new common_1.BadRequestException("This is likely a duplicate, please try again in next "
                                + (10 - minuteDiff) + ' minutes.');
                        }
                    }
                    // console.log(purchaseExist, timeNow);
                }
                (_b = purchase.itemsPurchased) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
                    delete item['id'];
                });
                const itemItems = yield this.stockItemModel.create(purchase.itemsPurchased);
                // console.log(purchase.itemsPurchased);
                // return purchase.itemsPurchased;
                // console.log(itemItems);
                // return purchase.itemsPurchased;
                purchase.itemsPurchased = itemItems.map((item) => item === null || item === void 0 ? void 0 : item._id);
                purchase.userAccount = this.cls.get('contextUser._id');
                return (yield this.purchaseModel.create(purchase)).populate([
                    {
                        path: 'itemsPurchased',
                        model: rmd_db_model_1.ERmdDbModels.stockItemModel,
                    },
                    {
                        path: 'userAccount',
                        model: rmd_db_model_1.ERmdDbModels.userAccountModel,
                        select: 'acctType email userName firstName surName appModule shopBranch',
                        options: { withDeleted: true },
                    },
                ]);
            }
            ;
        });
    }
    saveStockItem(stock) {
        if (stock === null || stock === void 0 ? void 0 : stock._id) {
            return this.stockItemModel.findByIdAndUpdate(stock._id, stock, { new: true });
        }
        else {
            return this.stockItemModel.create(stock);
        }
    }
    deleteStockItem(itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stock = yield this.stockItemModel.deleteById(itemId, this.cls.get('contextUser._id'));
            if (stock === null || stock === void 0 ? void 0 : stock.modifiedCount)
                return this.stockItemModel.find({});
        });
    }
    sellStock(stockSale) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const saleItemsNames = stockSale.saleItems.map((item) => item.itemName);
            // console.log(stockSale);
            // return
            const items = yield this.stockItemModel.aggregate([
                {
                    $match: {
                        quantity: { $gte: 1 },
                        itemName: { $in: saleItemsNames },
                    },
                },
                {
                    $sort: {
                        createdAt: 1,
                    },
                },
                {
                    $group: {
                        _id: '$_id',
                        itemName: { $addToSet: '$itemName' },
                        quantity: { $sum: '$quantity' },
                        createdAt: { $addToSet: '$createdAt' },
                    },
                },
                {
                    $project: {
                        _id: '$_id',
                        itemName: {
                            $arrayElemAt: ['$itemName', 0],
                        },
                        createdAt: {
                            $arrayElemAt: ['$createdAt', 0],
                        },
                        quantity: '$quantity'
                    }
                },
                {
                    $sort: {
                        createdAt: 1,
                        itemName: 1,
                    }
                }
            ]);
            let stockItems = [];
            stockSale.saleItems.forEach((item) => {
                let qttyInputted = parseInt(item.quantity);
                const totQttyAvail = items.filter((itm) => itm.itemName == item.itemName).reduce((tot, cur) => tot + cur.quantity, 0);
                if (qttyInputted > totQttyAvail) {
                    throw new common_1.ConflictException(item.itemName + 'remains ' + totQttyAvail);
                }
                const itemVariants = items.filter((itm) => itm.itemName == item.itemName)
                    .sort((a, b) => new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? -1 : 1);
                let qttyToDeduct = qttyInputted;
                itemVariants.forEach((itm) => {
                    if (itm.quantity >= qttyInputted) {
                        qttyToDeduct = qttyInputted;
                        qttyInputted -= qttyToDeduct;
                    }
                    else {
                        qttyToDeduct = itm.quantity;
                        qttyInputted -= qttyToDeduct;
                    }
                    if (qttyToDeduct > 0) {
                        stockItems.push({
                            itemId: itm._id,
                            itemName: itm.itemName,
                            quantity: qttyToDeduct,
                            unitCostPrice: item.unitCostPrice,
                            unitSellingPrice: item.unitSellingPrice,
                            amount: qttyToDeduct * item.unitSellingPrice,
                            payMethod: item.payMethod
                        });
                    }
                });
            });
            stockSale.invoiceId = (0, lib_xUtils_1.randomChars)('numbers', 4);
            stockSale.userAccount = (_a = this.cls.get('contextUser')) === null || _a === void 0 ? void 0 : _a._id;
            stockSale.saleItems = stockItems;
            const sale = yield this.saleModel.create(stockSale);
            if (sale._id) {
                for (let i = 0; i < ((_b = sale.saleItems) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    yield this.stockItemModel.findByIdAndUpdate(sale.saleItems[i].itemId, {
                        $inc: {
                            quantity: -((_c = sale.saleItems[i]) === null || _c === void 0 ? void 0 : _c.quantity)
                        }
                    });
                }
            }
            return sale;
        });
    }
    deleteSoldStock(batchId, stockId, type) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (type == 'single') {
                const deletion = yield this.saleModel.findOneAndUpdate({
                    'saleItems._id': { $in: [stockId] }
                }, {
                    $set: {
                        'saleItems.$.deleted': true,
                        'saleItems.$.deletedBy': this.cls.get('contextUser._id'),
                        'saleItems.$.deletedAt': new Date(),
                    }
                }, {
                    new: true,
                    strict: false,
                    strictQuery: false
                });
                if (!deletion)
                    throw new Error("Error, item can not be deleted.");
                const deleteItem = (_a = deletion === null || deletion === void 0 ? void 0 : deletion.saleItems) === null || _a === void 0 ? void 0 : _a.find((item) => item._id.toString() == stockId && new mongoose_1.Types.ObjectId(item.deleted));
                // console.log(deleteItem);
                let returnQtty;
                if (deleteItem) {
                    returnQtty = yield this.stockItemModel.findByIdAndUpdate(deleteItem.itemId, {
                        $inc: {
                            quantity: deleteItem.quantity
                        }
                    }, { new: true });
                }
                return returnQtty ? deleteItem : null;
                // return this.saleModel.findByIdAndUpdate(batchId,
                //   {
                //     $pull: {saleItems: {_id: stockId}}
                //   },
                //   {
                //     new: true
                //   }
                // )
            }
            else {
                return this.saleModel.deleteById(batchId, this.cls.get('contextUser._id'));
                //.findByIdAndDelete({_id: batchId}, {new: true});
            }
        });
    }
};
StocksStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.stockItemModel)),
    tslib_1.__param(1, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.purchaseModel)),
    tslib_1.__param(2, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.saleModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _b : Object, typeof (_c = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], StocksStoreService);
exports.StocksStoreService = StocksStoreService;


/***/ }),

/***/ "./src/app/rmd/common/stocks/stocks.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StocksModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const stocks_store_controller_1 = __webpack_require__("./src/app/rmd/common/stocks/controllers/stocks-store.controller.ts");
const stocks_query_controller_1 = __webpack_require__("./src/app/rmd/common/stocks/controllers/stocks-query.controller.ts");
const stocks_store_service_1 = __webpack_require__("./src/app/rmd/common/stocks/services/stocks-store.service.ts");
const stocks_query_service_1 = __webpack_require__("./src/app/rmd/common/stocks/services/stocks-query.service.ts");
const lib_dbConfig_1 = __webpack_require__("../../libs/lib-db-config/src/index.ts");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const stocks_schema_1 = __webpack_require__("./src/app/rmd/common/stocks/stocks.schema.ts");
const settings_schema_1 = __webpack_require__("./src/app/rmd/common/settings/settings.schema.ts");
const services_schema_1 = __webpack_require__("./src/app/rmd/common/services/services.schema.ts");
const game_schema_1 = __webpack_require__("./src/app/rmd/common/game/game.schema.ts");
let StocksModule = class StocksModule {
};
StocksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [stocks_store_controller_1.StocksStoreController, stocks_query_controller_1.StocksQueryController],
        providers: [stocks_store_service_1.StocksStoreService, stocks_query_service_1.StocksQueryService,
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.purchaseModel,
                modelSchema: stocks_schema_1.StockPurchaseSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.stockItemModel,
                modelSchema: stocks_schema_1.stockItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.saleModel,
                modelSchema: stocks_schema_1.stockSaleSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.saleItemModel,
                modelSchema: stocks_schema_1.saleItemSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.systemConfigModel,
                modelSchema: settings_schema_1.systemConfigSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.serviceRenderedModel,
                modelSchema: services_schema_1.serviceRenderedSchema,
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.gamePlayedModel,
                modelSchema: game_schema_1.gamePlayedSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.expenditureModel,
                modelSchema: settings_schema_1.expenditureSchema
            }),
            (0, lib_dbConfig_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.staffPayModel,
                modelSchema: settings_schema_1.staffPaySchema
            }),
        ],
    })
], StocksModule);
exports.StocksModule = StocksModule;


/***/ }),

/***/ "./src/app/rmd/common/stocks/stocks.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stockSaleSchema = exports.StockPurchaseSchema = exports.saleItemSchema = exports.stockItemSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
exports.stockItemSchema = new mongoose_1.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    unitCostPrice: {
        type: Number,
        required: true
    },
    unitSellingPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.saleItemSchema = new mongoose_1.Schema({
    itemId: {
        type: String,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitCostPrice: {
        type: Number,
        required: true,
    },
    unitSellingPrice: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    payMethod: String,
}, {
    timestamps: true
});
exports.StockPurchaseSchema = new mongoose_1.Schema({
    vendor: {
        type: String,
        required: true,
    },
    itemsPurchased: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: rmd_db_model_1.ERmdDbModels.stockItemModel
        }
    ],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel,
    },
}, { timestamps: true });
exports.stockSaleSchema = new mongoose_1.Schema({
    invoiceId: String,
    saleItems: [exports.saleItemSchema],
    userAccount: {
        type: mongoose_1.Types.ObjectId,
        ref: rmd_db_model_1.ERmdDbModels.userAccountModel
    }
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/rmd/common/user-account/account.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accountSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
exports.accountSchema = new mongoose_1.Schema({
    acctType: {
        type: String,
        enum: ['Super', 'Standard', 'Basic']
    },
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    passWord: {
        type: String,
    },
    salt: String,
}, {
    timestamps: true
});


/***/ }),

/***/ "./src/app/rmd/common/user-account/controllers/user-account-query.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountQueryController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_query_service_1 = __webpack_require__("./src/app/rmd/common/user-account/services/user-account-query.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountQueryController = class UserAccountQueryController {
    constructor(accountQueryService) {
        this.accountQueryService = accountQueryService;
    }
    login(body) {
        return this.accountQueryService.loginStaffAccount(body);
    }
    getUserAccounts() {
        return this.accountQueryService.getAccounts();
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EAccountQuery.staffProfileLogin),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountQueryController.prototype, "login", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)('*', '*'),
    (0, common_1.Get)(lib_xUtils_1.EAccountQuery.staffProfiles),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountQueryController.prototype, "getUserAccounts", null);
UserAccountQueryController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountQuery.accountQuery),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_account_query_service_1.UserAccountQueryService !== "undefined" && user_account_query_service_1.UserAccountQueryService) === "function" ? _a : Object])
], UserAccountQueryController);
exports.UserAccountQueryController = UserAccountQueryController;


/***/ }),

/***/ "./src/app/rmd/common/user-account/controllers/user-account-store.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountStoreController = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_store_service_1 = __webpack_require__("./src/app/rmd/common/user-account/services/user-account-store.service.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountStoreController = class UserAccountStoreController {
    constructor(accountStoreService) {
        this.accountStoreService = accountStoreService;
    }
    saveAccount(body) {
        return this.accountStoreService.saveAccount(body);
    }
    deleteAccount(accountId) {
        return this.accountStoreService.deleteAccount(accountId);
    }
};
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Post)(lib_xUtils_1.EAccountStore.profile),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountStoreController.prototype, "saveAccount", null);
tslib_1.__decorate([
    (0, lib_nest_modules_1.Roles)(['Super'], '*'),
    (0, common_1.Delete)(lib_xUtils_1.EAccountStore.profile + '/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserAccountStoreController.prototype, "deleteAccount", null);
UserAccountStoreController = tslib_1.__decorate([
    (0, common_1.Controller)(lib_xUtils_1.EAccountStore.accountStore),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_account_store_service_1.UserAccountStoreService !== "undefined" && user_account_store_service_1.UserAccountStoreService) === "function" ? _a : Object])
], UserAccountStoreController);
exports.UserAccountStoreController = UserAccountStoreController;


/***/ }),

/***/ "./src/app/rmd/common/user-account/services/user-account-query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountQueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let UserAccountQueryService = class UserAccountQueryService {
    constructor(userAccountModel, accountService, jwtService, cls) {
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.jwtService = jwtService;
        this.cls = cls;
        this.accountService.accountModelRmd = this.userAccountModel;
        this.accountService.accountUserKey = 'email';
    }
    loginStaffAccount(staff) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userAccountModel.findOne({
                email: staff.email,
            });
            if (!user)
                throw new common_1.ForbiddenException('Invalid user credentials, please try again.');
            const userInfo = yield this.userAccountModel.findOne({
                _id: user === null || user === void 0 ? void 0 : user._id,
            }, { salt: 0, passWord: 0 });
            console.log(userInfo.email, ' Logged In!');
            return {
                token: this.jwtService.jwtSign(this.accountService.decryptAccountPassword(user, staff.passWord), 'email'),
                staff: userInfo,
            };
        });
    }
    getAccounts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
            return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
        });
    }
};
UserAccountQueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof lib_serverConfig_1.JwtService !== "undefined" && lib_serverConfig_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], UserAccountQueryService);
exports.UserAccountQueryService = UserAccountQueryService;


/***/ }),

/***/ "./src/app/rmd/common/user-account/services/user-account-store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountStoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
const mongoose_delete_1 = __webpack_require__("mongoose-delete");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let UserAccountStoreService = class UserAccountStoreService {
    constructor(userAccountModel, accountService, cls) {
        this.userAccountModel = userAccountModel;
        this.accountService = accountService;
        this.cls = cls;
        this.accountService.accountModelRmd = this.userAccountModel;
    }
    saveAccount(accountForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (accountForm === null || accountForm === void 0 ? void 0 : accountForm._id) {
                const account = yield this.userAccountModel.findByIdAndUpdate(accountForm._id, this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id) {
                    const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                    return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
                    return this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                }
            }
            else {
                const account = yield this.userAccountModel.create(this.accountService.encryptAccountPassword(accountForm));
                if (account === null || account === void 0 ? void 0 : account._id) {
                    const accounts = yield this.userAccountModel.find({}, { salt: 0, passWord: 0 });
                    return accounts.filter((account) => account.email !== 'ibnadam.net@gmail.com');
                }
                // return this.userAccountModel.find({}, {salt: 0, passWord: 0});
            }
        });
    }
    deleteAccount(accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accountToDelete = yield this.userAccountModel.findById(accountId);
            if (accountToDelete.email == 'ibnadam.net@gmail.com')
                return;
            const account = yield this.userAccountModel.deleteById(accountId, this.cls.get('contextUser._id'));
            if (account === null || account === void 0 ? void 0 : account.modifiedCount)
                return this.userAccountModel.find({}, { salt: 0, passWord: 0 });
            throw new common_1.NotFoundException("Error occured, account not deleted please try again.");
        });
    }
};
UserAccountStoreService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(rmd_db_model_1.ERmdDbModels.userAccountModel)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_delete_1.SoftDeleteModel !== "undefined" && mongoose_delete_1.SoftDeleteModel) === "function" ? _a : Object, typeof (_b = typeof lib_nest_modules_1.AccountService !== "undefined" && lib_nest_modules_1.AccountService) === "function" ? _b : Object, typeof (_c = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _c : Object])
], UserAccountStoreService);
exports.UserAccountStoreService = UserAccountStoreService;


/***/ }),

/***/ "./src/app/rmd/common/user-account/user-account.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAccountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_query_controller_1 = __webpack_require__("./src/app/rmd/common/user-account/controllers/user-account-query.controller.ts");
const user_account_store_controller_1 = __webpack_require__("./src/app/rmd/common/user-account/controllers/user-account-store.controller.ts");
const user_account_store_service_1 = __webpack_require__("./src/app/rmd/common/user-account/services/user-account-store.service.ts");
const user_account_query_service_1 = __webpack_require__("./src/app/rmd/common/user-account/services/user-account-query.service.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const rmd_db_model_1 = __webpack_require__("./src/app/rmd/rmd-db.model.ts");
const account_schema_1 = __webpack_require__("./src/app/rmd/common/user-account/account.schema.ts");
const lib_nest_modules_1 = __webpack_require__("../../libs/lib-nest-modules/src/index.ts");
let UserAccountModule = class UserAccountModule {
};
UserAccountModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [lib_nest_modules_1.AccountModule],
        controllers: [user_account_query_controller_1.UserAccountQueryController, user_account_store_controller_1.UserAccountStoreController],
        providers: [user_account_store_service_1.UserAccountStoreService, user_account_query_service_1.UserAccountQueryService,
            (0, db_providers_1.modelProvider)({
                modelName: rmd_db_model_1.ERmdDbModels.userAccountModel,
                modelSchema: account_schema_1.accountSchema
            })
        ],
    })
], UserAccountModule);
exports.UserAccountModule = UserAccountModule;


/***/ }),

/***/ "./src/app/rmd/rmd-db.model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERmdDbModels = void 0;
var ERmdDbModels;
(function (ERmdDbModels) {
    ERmdDbModels["userAccountModel"] = "SALON_UserAccount";
    ERmdDbModels["systemConfigModel"] = "SALON_SystemConfig";
    ERmdDbModels["stockItemModel"] = "SALON_StockItem";
    ERmdDbModels["purchaseModel"] = "SALON_Purchase";
    ERmdDbModels["saleModel"] = "SALON_Sale";
    ERmdDbModels["saleItemModel"] = "SALON_SaleItem";
    ERmdDbModels["serviceItemModel"] = "SALON_ServiceItem";
    ERmdDbModels["serviceRenderedModel"] = "SALON_ServiceRendered";
    ERmdDbModels["serviceRenderedItemModel"] = "SALON_ServiceRenderedItem";
    ERmdDbModels["expenditureModel"] = "SALON_EXPENDITURE";
    ERmdDbModels["gameModel"] = "SALON_GAME";
    ERmdDbModels["gamePlayedModel"] = "SALON_GAME_PLAYED";
    ERmdDbModels["todoModel"] = "SALON_TODO";
    ERmdDbModels["staffPayModel"] = "SALON_SAFF_PAY";
})(ERmdDbModels = exports.ERmdDbModels || (exports.ERmdDbModels = {}));


/***/ }),

/***/ "./src/app/rmd/rmd.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmdModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_account_module_1 = __webpack_require__("./src/app/rmd/common/user-account/user-account.module.ts");
const stocks_module_1 = __webpack_require__("./src/app/rmd/common/stocks/stocks.module.ts");
const settings_module_1 = __webpack_require__("./src/app/rmd/common/settings/settings-module.ts");
const services_module_1 = __webpack_require__("./src/app/rmd/common/services/services.module.ts");
const game_module_1 = __webpack_require__("./src/app/rmd/common/game/game.module.ts");
let RmdModule = class RmdModule {
};
RmdModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_account_module_1.UserAccountModule,
            stocks_module_1.StocksModule,
            settings_module_1.SettingsModule,
            services_module_1.ServicesModule,
            game_module_1.GameModule,
        ]
    })
], RmdModule);
exports.RmdModule = RmdModule;


/***/ }),

/***/ "./src/app/rmd/rmd.routing.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RmdModuleRoute = void 0;
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const rmd_module_1 = __webpack_require__("./src/app/rmd/rmd.module.ts");
const user_account_module_1 = __webpack_require__("./src/app/rmd/common/user-account/user-account.module.ts");
const stocks_module_1 = __webpack_require__("./src/app/rmd/common/stocks/stocks.module.ts");
const settings_module_1 = __webpack_require__("./src/app/rmd/common/settings/settings-module.ts");
const services_module_1 = __webpack_require__("./src/app/rmd/common/services/services.module.ts");
const game_module_1 = __webpack_require__("./src/app/rmd/common/game/game.module.ts");
exports.RmdModuleRoute = [
    {
        path: 'rmd',
        module: rmd_module_1.RmdModule,
        children: [
            {
                path: lib_xUtils_1.EFeatureAppModule.GAME.toLowerCase(),
                module: game_module_1.GameModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.SERVICE.toLowerCase(),
                module: services_module_1.ServicesModule
            },
            {
                path: lib_xUtils_1.ECommonAppModule.Account.toLowerCase(),
                module: user_account_module_1.UserAccountModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.STOCK.toLowerCase(),
                module: stocks_module_1.StocksModule
            },
            {
                path: lib_xUtils_1.EFeatureAppModule.Setting.toLowerCase(),
                module: settings_module_1.SettingsModule
            }
        ]
    }
];


/***/ }),

/***/ "../../libs/lib-db-config/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-db-config/src/lib/db-config.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-db-config/src/lib/types/db-model.types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-db-config/src/lib/types/db-models.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts"), exports);


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/db-config.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DbConfigModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const path_1 = __webpack_require__("path");
const db_config_1 = tslib_1.__importDefault(__webpack_require__("../../libs/lib-db-config/src/lib/db-config.ts"));
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const db_config_service_1 = __webpack_require__("../../libs/lib-db-config/src/lib/services/db-config.service.ts");
const db_providers_1 = __webpack_require__("../../libs/lib-db-config/src/lib/db.providers.ts");
const configPath = (0, path_1.resolve)((0, path_1.join)(__dirname, lib_serverConfig_1.StoreService.appName, 'assets', '.db.env'));
let DbConfigModule = DbConfigModule_1 = class DbConfigModule {
    static register(options) {
        if (options.global == undefined || options.global == null)
            options.global = false;
        // console.log('CONFIG PATH', configPath);
        const customProviders = [];
        if (Array.isArray(options.dbIndex)) {
            for (let i = 0; i < options.dbIndex.length; i++) {
                customProviders.push((0, db_providers_1.dbProvider)(options.dbConnIndex, options.dbIndex[i]));
            }
        }
        else {
            customProviders.push((0, db_providers_1.dbProvider)(options.dbConnIndex, options.dbIndex));
        }
        return {
            global: options.global,
            imports: [],
            module: DbConfigModule_1,
            providers: customProviders,
            exports: customProviders,
        };
    }
    constructor() {
        // console.log('CONFIG PATH', configPath);
    }
};
DbConfigModule = DbConfigModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [db_config_1.default],
                envFilePath: configPath,
                cache: true,
            }),
        ],
        providers: [lib_serverConfig_1.CmdService, db_config_service_1.DbConfigService],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DbConfigModule);
exports.DbConfigModule = DbConfigModule;


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/db-config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('db', () => ({
    dbService: process.env['DB_SERVICE'],
    dbUrl: process.env['DB_URL'],
    dbPort: process.env['DB_PORT'],
    dbConn1: process.env['DB_CONN_1'],
    dbConn2: process.env['DB_CONN_2'],
    dbConn3: process.env['DB_CONN_3'],
    dbConn4: process.env['DB_CONN_4'],
    dbConn5: process.env['DB_CONN_5'],
    dbConn6: process.env['DB_CONN_6'],
    dbConn7: process.env['DB_CONN_7'],
    dbConn8: process.env['DB_CONN_8'],
    dbConn9: process.env['DB_CONN_9'],
    dbConn10: process.env['DB_CONN_10'],
    db1: process.env['DB_1'],
    db2: process.env['DB_2'],
    db3: process.env['DB_3'],
    db4: process.env['DB_4'],
    db5: process.env['DB_5'],
    db6: process.env['DB_6'],
    db7: process.env['DB_7'],
    db8: process.env['DB_8'],
    db9: process.env['DB_9'],
    db10: process.env['DB_10'],
    dbUser: process.env['DB_USER'],
    dbPass: process.env['DB_PASS'],
}));


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/db.providers.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modelProvider = exports.dbProvider = exports.models = exports.dbConnection = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = tslib_1.__importDefault(__webpack_require__("mongoose"));
const mongoose_delete_1 = tslib_1.__importDefault(__webpack_require__("mongoose-delete"));
const db_config_service_1 = __webpack_require__("../../libs/lib-db-config/src/lib/services/db-config.service.ts");
const path_1 = __webpack_require__("path");
const db_models_enum_1 = __webpack_require__("../../libs/lib-db-config/src/lib/types/db-models.enum.ts");
const electron_1 = __webpack_require__("electron");
exports.dbConnection = null;
exports.models = [];
const dbProvider = (dbNameIndex, dbConnIndex, customDbConfig) => {
    return {
        provide: dbNameIndex,
        useFactory: (dbConfigService) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                // if (!(0, path_1.resolve)('.').toLowerCase().includes('healma') &&
                //     !(0, path_1.resolve)('.').toLowerCase().includes('healmah') && !electron_1.app) {
                //     var config = JSON.parse(process.env['APP_CONFIG'] || '{}');
                //     const conn = yield mongoose_1.default.connect("mongodb://" + config.mongo.user + ":" + encodeURIComponent(dbConfigService.dbPass) + "@" +
                //         config.mongo.hostString);
                //     if (conn) {
                //         console.log(dbConfigService.dbName(dbNameIndex), ' successfully connected.');
                //         exports.dbConnection = conn.connection;
                //     }
                //     return conn;
                // }
                // const dbStatus = yield dbConfigService.ensureDbRunning();
                // if (!dbStatus) {
                //     console.log('DB STATUS', dbStatus);
                //     console.log(dbConfigService.dbUrl, ' - ', dbConfigService.dbPort, ' - ', dbConfigService.dbName(dbNameIndex));
                //     console.log(dbConfigService.dbName(dbNameIndex), ' not connected');
                //     return Promise.resolve(false);
                // }
                // ;
                // const conn = mongoose_1.default.createConnection(`${dbConfigService.dbUrl}:${dbConfigService.dbPort}/${dbConfigService.dbName(dbNameIndex)}`, { minPoolSize: 10 });
                // if (conn) {
                //     console.log(dbConfigService.dbName(dbNameIndex), ' successfully connected');
                //     exports.dbConnection = conn;
                // }
                // return conn;

                const conn = yield mongoose_1.default.connect(`${dbConfigService.dbUrl}`);
                // :${dbConfigService.dbPort}/${dbConfigService.dbName(dbNameIndex)}`, { minPoolSize: 10 }
                if (conn) {
                    console.log(dbConfigService.dbName(dbNameIndex), ' successfully connected');
                    exports.dbConnection = conn.connection;
                }
                return conn;
            }
            catch (error) {
                console.log('mongo connection error ', error);
                console.log(dbConfigService.dbUrl, ' = ', dbConfigService.dbName(dbNameIndex));
                console.log(dbConfigService.dbName(dbNameIndex), ' not connected');
            }
        }),
        inject: [db_config_service_1.DbConfigService],
    };
};
exports.dbProvider = dbProvider;
const modelProvider = (config) => {
    if (!config.dbConnModel)
        config.dbConnModel = db_models_enum_1.EDbProvider.dbConn1;
    if (!config.applyMongooseDeletePlugin)
        config.applyMongooseDeletePlugin = true;
    return {
        provide: config.modelName,
        useFactory: (connection) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                if ((0, path_1.resolve)('.').includes('healmah')) {
                    if (!connection)
                        return;
                }
                // console.log(' Db Connections ', connection?.id, connection?.modelNames())
                if (config.applyMongooseDeletePlugin) {
                    config.modelSchema.plugin(mongoose_delete_1.default, {
                        deletedAt: true,
                        deletedBy: true,
                        overrideMethods: true,
                    });
                    config.modelSchema.pre('find', function () {
                        const { withDeleted } = this.getOptions();
                        if (withDeleted) {
                            delete this.getFilter()['deleted'];
                        }
                    });
                }
                exports.models = [...Object.entries(connection.models)];
                // Object.entries(connection.models).forEach((entry)=>models.push(entry))
                // console.log(models);
                // connection.models
                let model;
                for (let i = 0; i < (exports.models === null || exports.models === void 0 ? void 0 : exports.models.length); i++) {
                    if (exports.models[i].includes(config.modelName)) {
                        console.log(config.modelName, ' is registered');
                        model = exports.models[i][1];
                    }
                }
                if (!model)
                    model = connection.model(config.modelName, config.modelSchema);
                // else{
                //   model
                // }
                if (model) {
                    exports.models.push(model);
                    // console.log(model.modelName, ' registered successfully!');
                }
                return model;
            }
            catch (error) {
                console.log('No connection for ', config.modelName, ' model', error);
            }
            return;
        }),
        inject: [config.dbConnModel],
    };
};
exports.modelProvider = modelProvider;
// export const mProvider = <T>(config: {
//   [K in keyof T]?: T[K];
//   // modelName?: any;
//   // modelSchema: Schema;
//   // dbConnModel?: EDbProvider;
//   // applyMongooseDeletePlugin?: boolean;
// }) => {
//   if (!config.dbConnModel) config.dbConnModel = EDbProvider.dbConn1;
//   if (!config.applyMongooseDeletePlugin)
//     config.applyMongooseDeletePlugin = true;
//   return {
//     provide: config.modelName,
//     useFactory: async (connection: Connection) => {
//       try {
//         if(resolve('.').includes('healmah')) {
//           if (!connection) return;
//         }
//         console.log(' Db Connections ', connection.id, connection.modelNames())
//         if (config.applyMongooseDeletePlugin) {
//           config.modelSchema.plugin(MongooseDelete, {
//             deletedAt: true,
//             deletedBy: true,
//             overrideMethods: true,
//           });
//           config.modelSchema.pre('find', function () {
//             const { withDeleted }: any = this.getOptions() as any;
//             if (withDeleted) {
//               delete this.getFilter()['deleted'];
//             }
//           });
//         }
//         const model = connection.model(config.modelName, config.modelSchema);
//         if (model)
//           console.log(config.modelName, ' model registered successfully!');
//         return model;
//       } catch (error) {
//         console.log('No connection for ', config.modelName, ' model', error);
//       }
//       return;
//     },
//     inject: [config.dbConnModel],
//   };
// };


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/services/db-config.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const schedule_1 = __webpack_require__("@nestjs/schedule");
const common_1 = __webpack_require__("@nestjs/common");
const path_1 = __webpack_require__("path");
const config_1 = __webpack_require__("@nestjs/config");
// import { Stor eService } from '../services/store.service';
// import { CronJob } from 'cron';
const cron = __webpack_require__("cron");
const electron_1 = __webpack_require__("electron");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let DbConfigService = class DbConfigService {
    constructor(_configService, cmdService) {
        this._configService = _configService;
        this.cmdService = cmdService;
        this.retryCount = 3;
        this.ensureDbRunning();
        new cron.CronJob(schedule_1.CronExpression.EVERY_DAY_AT_8PM, () => {
            this.backupDb();
        }).start();
        // console.log(Inject());
    }
    get dbService() {
        return this._configService.get('db.dbService');
    }
    dbName(dbIndex) {
        return this._configService.get('db.db' + dbIndex);
    }
    dbConn(connIndex) {
        return this._configService.get('db.dbConn' + connIndex);
    }
    get dbUser() {
        return this._configService.get('db.dbUser');
    }
    get dbPass() {
        return this._configService.get('db.dbPass');
    }
    get dbUrl() {
        return this._configService.get('db.dbUrl');
    }
    get dbPort() {
        return this._configService.get('db.dbPort');
    }
    ensureModel(model) {
        if (!model)
            throw new common_1.BadGatewayException("Can't handle this request, model not properly configured");
    }
    ensureDbRunning() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!electron_1.app)
                return true;
            const isServicePresent = yield this.cmdService.isServiceAvailable(this.dbService);
            if (!isServicePresent)
                return false;
            const isDbRunning = yield this.cmdService.isServiceRunning(this.dbService);
            if (isDbRunning)
                return isDbRunning;
            const run = yield this.cmdService.runCmd(`net start ${this.dbService}`);
            --this.retryCount;
            if (!run.success && this.retryCount >= 0) {
                yield this.ensureDbRunning();
            }
            if (this.retryCount >= 0) {
                electron_1.app === null || electron_1.app === void 0 ? void 0 : electron_1.app.relaunch();
                electron_1.app === null || electron_1.app === void 0 ? void 0 : electron_1.app.exit();
            }
            return isDbRunning;
        });
    }
    backupDb() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!electron_1.app)
                return;
            try {
                const run = yield this.cmdService.runCmd(`mongodump --gzip --db ${this.dbName} --archive=${(0, path_1.join)(lib_serverConfig_1.StoreService.uploadRootDir, lib_xUtils_1.EFileUploadDir.setting, new Date().getTime() + '.archive')}`);
                --this.retryCount;
                if (!run.success && this.retryCount >= 1) {
                    this.backupDb();
                }
                return run;
            }
            catch (error) {
                console.log(error);
            }
            return;
        });
    }
    restoreDb(fileName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const run = yield this.cmdService.runCmd(`mongorestore --gzip --db ${this.dbName} --archive=${(0, path_1.join)(lib_serverConfig_1.StoreService.uploadRootDir, lib_xUtils_1.EFileUploadDir.setting, fileName + '.archive --drop')}`);
                --this.retryCount;
                if (!run.success && this.retryCount >= 1) {
                    this.backupDb();
                }
                return run;
            }
            catch (error) {
                console.log(error);
            }
            return;
        });
    }
};
DbConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof lib_serverConfig_1.CmdService !== "undefined" && lib_serverConfig_1.CmdService) === "function" ? _b : Object])
], DbConfigService);
exports.DbConfigService = DbConfigService;


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/types/db-model.types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-db-config/src/lib/types/db-models.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVetModelProvider = exports.ECinModelProvider = exports.EDbProvider = void 0;
/* eslint-disable prettier/prettier */
var EDbProvider;
(function (EDbProvider) {
    EDbProvider["dbConn1"] = "1";
    EDbProvider["dbConn2"] = "2";
    EDbProvider["dbConn3"] = "3";
    EDbProvider["dbConn4"] = "4";
    EDbProvider["dbConn5"] = "5";
    EDbProvider["dbConn6"] = "6";
    EDbProvider["dbConn7"] = "7";
    EDbProvider["dbConn8"] = "8";
    EDbProvider["dbConn9"] = "9";
    EDbProvider["dbConn10"] = "10";
    EDbProvider["db1"] = "1";
    EDbProvider["db2"] = "2";
    EDbProvider["db3"] = "3";
    EDbProvider["db4"] = "4";
    EDbProvider["db5"] = "5";
    EDbProvider["db6"] = "6";
    EDbProvider["db7"] = "7";
    EDbProvider["db8"] = "8";
    EDbProvider["db9"] = "9";
    EDbProvider["db10"] = "10";
})(EDbProvider = exports.EDbProvider || (exports.EDbProvider = {}));
var ECinModelProvider;
(function (ECinModelProvider) {
    //////////// CORE MODULES  ////////////////////
    /// Inventory
    ECinModelProvider["stockItemModel"] = "StockItem";
    ECinModelProvider["purchaseModel"] = "Purchase";
    ECinModelProvider["vendorModel"] = "vendor";
    ECinModelProvider["unitModel"] = "unit";
    ECinModelProvider["stockLevelModeratorModel"] = "stockLevelModerator";
    //// Dispensary
    ECinModelProvider["dispensedOrderModel"] = "DispensedOrder";
    ECinModelProvider["expenditureModel"] = "ExpenseRegister";
    //////////// FEATURE MODULES ////////////////////
    /// Settings
    ECinModelProvider["staffModel"] = "User";
    ECinModelProvider["systemSettingsModel"] = "SystemSettings";
})(ECinModelProvider = exports.ECinModelProvider || (exports.ECinModelProvider = {}));
var EVetModelProvider;
(function (EVetModelProvider) {
    EVetModelProvider["userAccountModel"] = "UserAccount";
    EVetModelProvider["stockItemModel"] = "StockItem";
    EVetModelProvider["purchaseModel"] = "Purchase";
    EVetModelProvider["saleModel"] = "Sale";
})(EVetModelProvider = exports.EVetModelProvider || (exports.EVetModelProvider = {}));


/***/ }),

/***/ "../../libs/lib-nest-modules/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/lib-nest-modules.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-auth.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.index.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.routes.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/services/printer.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/idempotency.module.ts"), exports);


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/account/account-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountAuthGuard = exports.Roles = void 0;
const tslib_1 = __webpack_require__("tslib");
const account_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const account_jwt_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts");
// import { IHealmahClsStore } from '../types/nest.interface';
const Roles = (accountType, module) => (0, common_1.SetMetadata)('roles', [accountType, module]);
exports.Roles = Roles;
let AccountAuthGuard = class AccountAuthGuard {
    constructor(jwtService, reflector, accountService, cls) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.accountService = accountService;
        this.cls = cls;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const roles = this.reflector.getAllAndOverride('roles', [
            context.getClass(),
            context.getHandler(),
        ]);
        if (!roles)
            return true;
        const verified = this.jwtService.jwtVerify(request.headers['auth-token']);
        const filter = {};
        filter[this.accountService.accountUserKey] = verified[this.accountService.accountUserKey];
        this.cls.set('contextUser', verified);
        // console.log(request.originalUrl);
        // console.log(verified);
        // console.log(filter, this.accountService.accountUserKey);
        // if(request.originalUrl.includes('dvt'))
        //   this.accountService.accountModel = this.
        let model = {};
        if (request.originalUrl.includes('dvt')) {
            model = this.accountService.accountModelDvt;
        }
        else if (request.originalUrl.includes('rmd')) {
            model = this.accountService.accountModelRmd;
        }
        else if (request.originalUrl.includes('cpt')) {
            model = this.accountService.accountModelCpt;
        }
        else
            model = this.accountService.accountModel;
        return this.contextUser(roles[0], roles[1], filter, model);
    }
    contextUser(contextAccountTypes, contextModule, filter, model) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { appModule, acctType } = (yield model.findOne(filter)) || {};
            if (contextModule !== '*' && contextAccountTypes !== '*') {
                return (contextModule.includes(appModule) &&
                    contextAccountTypes.includes(acctType));
            }
            // User module specified but not account type
            if (contextModule !== '*' && contextAccountTypes === '*') {
                return contextModule.includes(appModule);
            }
            // User module not specified but account type
            if (contextModule === '*' && contextAccountTypes !== '*') {
                return contextAccountTypes.includes(acctType);
            }
            // Both user module and account type not specified
            if (contextModule === '*' && contextAccountTypes === '*') {
                return true;
            }
            return false;
        });
    }
};
AccountAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof account_jwt_service_1.JwtService !== "undefined" && account_jwt_service_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object, typeof (_c = typeof account_service_1.AccountService !== "undefined" && account_service_1.AccountService) === "function" ? _c : Object, typeof (_d = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _d : Object])
], AccountAuthGuard);
exports.AccountAuthGuard = AccountAuthGuard;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const server_config_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts");
let JwtService = class JwtService {
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
    }
    jwtSign(user, ...props) {
        const loginUser = {
            _id: user['_id'],
            acctType: user['acctType']
        };
        props.forEach((prop) => {
            loginUser[prop] = user[prop];
        });
        return jwt.sign(loginUser, this.appConfigService.appCode, { expiresIn: '1d' });
    }
    jwtVerify(token) {
        var _a;
        token = (_a = JSON.parse(token || '{}')) === null || _a === void 0 ? void 0 : _a.token;
        if (!token)
            throw new common_1.UnauthorizedException(lib_xUtils_1.EErrorMessages.sessionExpired);
        try {
            return jwt.verify(token, this.appConfigService.appCode);
        }
        catch (error) {
            console.log(error);
            if (error.message.includes('expired') == false)
                throw new common_1.UnauthorizedException(lib_xUtils_1.EErrorMessages.unauthorized);
            throw new common_1.UnauthorizedException(lib_xUtils_1.EErrorMessages.sessionExpired);
        }
    }
};
JwtService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof server_config_service_1.ServerConfigService !== "undefined" && server_config_service_1.ServerConfigService) === "function" ? _a : Object])
], JwtService);
exports.JwtService = JwtService;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/account/account.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/account/account.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const account_jwt_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const account_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account.service.ts");
const core_1 = __webpack_require__("@nestjs/core");
const account_auth_guard_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-auth.guard.ts");
let AccountModule = class AccountModule {
};
AccountModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [lib_serverConfig_1.ServerConfigModule],
        exports: [account_service_1.AccountService, account_jwt_service_1.JwtService],
        providers: [
            account_service_1.AccountService, account_jwt_service_1.JwtService,
            {
                provide: core_1.APP_GUARD,
                useClass: account_auth_guard_1.AccountAuthGuard,
            },
        ],
    })
], AccountModule);
exports.AccountModule = AccountModule;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/account/account.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const crypto_1 = __webpack_require__("crypto");
const crypto = tslib_1.__importStar(__webpack_require__("crypto"));
const common_1 = __webpack_require__("@nestjs/common");
const account_jwt_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts");
let AccountService = class AccountService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    encryptAccountPassword(account) {
        account.salt = (0, crypto_1.randomBytes)(16).toString('hex');
        account.passWord = (0, crypto_1.pbkdf2Sync)(account.passWord, account.salt, 1000, 64, 'sha512').toString('hex');
        return account;
    }
    decryptAccountPassword(account, password) {
        const pass = crypto
            .pbkdf2Sync(password, account.salt, 1000, 64, 'sha512')
            .toString('hex');
        if (pass === account.passWord)
            return account;
        else
            throw new common_1.ForbiddenException('Invalid user credentials, please try again.');
    }
};
AccountService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof account_jwt_service_1.JwtService !== "undefined" && account_jwt_service_1.JwtService) === "function" ? _a : Object])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UNIQUE_PROP = exports.USER_SERVICE = exports.AUTH_SECRET = exports.AUTH_OPTIONS = void 0;
exports.AUTH_OPTIONS = Symbol('AUTH_OPTIONS');
exports.AUTH_SECRET = Symbol('AUTH_SECRET');
exports.USER_SERVICE = Symbol('USER_SERVICE');
exports.UNIQUE_PROP = Symbol('UNIQUE_PROP');


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(userData) {
        return this.authService.signUp(userData);
    }
    signin(userData) {
        return this.authService.signIn(userData);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('sign-up'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
tslib_1.__decorate([
    (0, common_1.Post)('sign-in'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('nix/settings/auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.interfaces.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/auth/guard/accessToken.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/auth/guard/refreshToken.guard.ts"), exports);


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.interfaces.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const local_strategy_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/strategies/local.strategy.ts");
const jwt_token_strategy_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/strategies/jwt-token.strategy.ts");
const jwt_refresh_strategy_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/strategies/jwt-refresh.strategy.ts");
const nestjs_modules_1 = __webpack_require__("@golevelup/nestjs-modules");
const auth_constants_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.constants.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const auth_controller_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.service.ts");
let AuthModule = class AuthModule extends (0, nestjs_modules_1.createConfigurableDynamicRootModule)(auth_constants_1.AUTH_OPTIONS, {
    providers: [
        {
            provide: auth_constants_1.AUTH_SECRET,
            inject: [auth_constants_1.AUTH_OPTIONS],
            useFactory: (options) => options.secret,
        },
        {
            provide: auth_constants_1.USER_SERVICE,
            inject: [auth_constants_1.AUTH_OPTIONS],
            useFactory: (options) => options.userService,
        },
        {
            provide: auth_constants_1.UNIQUE_PROP,
            inject: [auth_constants_1.AUTH_OPTIONS],
            useFactory: (options) => options.uniqueUserProp,
        },
    ],
}) {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({}),
        ],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_token_strategy_1.JwtTokenStrategy,
            jwt_refresh_strategy_1.JwtRefreshStrategy,
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jsonwebtoken_1 = __webpack_require__("jsonwebtoken");
const crypto_1 = __webpack_require__("crypto");
const auth_constants_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.constants.ts");
const auth_interfaces_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.interfaces.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
let AuthService = class AuthService {
    constructor(secret, uniqueUserProp, userService, jwtService, serverConfigService) {
        this.secret = secret;
        this.uniqueUserProp = uniqueUserProp;
        this.userService = userService;
        this.jwtService = jwtService;
        this.serverConfigService = serverConfigService;
    }
    signUp(userAccount) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUser(userAccount, 'signUp');
            userAccount = user;
            userAccount = this.hashAndSalt(userAccount);
            // return
            const newUser = yield this.userService.registerAccount(userAccount);
            // console.log(userAccount, newUser);
            const tokens = yield this.getTokens(newUser._id, newUser[this.uniqueUserProp]);
            yield this.updateRefreshToken(newUser._id, tokens.refreshToken);
            return tokens;
        });
    }
    findUser(userAccount, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findAccount(userAccount, type);
        });
    }
    signIn(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findAccount(userData, 'signIn');
            if (!user)
                throw new common_1.BadRequestException('Invalid user credentials, please try again.');
            this.disHashAndSalt(user, userData.passWord);
            const tokens = yield this.getTokens(user._id, user[this.uniqueUserProp]);
            yield this.updateRefreshToken(user._id, tokens.refreshToken);
            return tokens;
        });
    }
    hashAndSalt(account) {
        var _a;
        account.salt = (0, crypto_1.randomBytes)(16).toString('hex');
        account.passWord = (0, crypto_1.pbkdf2Sync)((_a = account.passWord) === null || _a === void 0 ? void 0 : _a.toString(), account.salt, 1000, 64, 'sha512').toString('hex');
        return account;
    }
    disHashAndSalt(account, password) {
        const pass = (0, crypto_1.pbkdf2Sync)(password === null || password === void 0 ? void 0 : password.toString(), account.salt, 1000, 64, 'sha512')
            .toString('hex');
        if (pass === account.passWord)
            return account;
        else
            throw new common_1.ForbiddenException('Invalid user credentials, please try again.');
    }
    getTokens(userId, userProp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [accessToken, refreshToken] = yield Promise.all([
                this.jwtService.signAsync({
                    sub: userId,
                    [this.uniqueUserProp]: userProp,
                }, {
                    secret: this.serverConfigService.appCode,
                    expiresIn: '1d',
                }),
                this.jwtService.signAsync({
                    sub: userId,
                    [this.uniqueUserProp]: userProp,
                }, {
                    secret: this.serverConfigService.name,
                    expiresIn: '7d',
                }),
            ]);
            return {
                accessToken,
                refreshToken,
            };
        });
    }
    updateRefreshToken(userId, refreshToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hashedRefreshToken = refreshToken;
            // const hashedRefreshToken = await this.hashData(refreshToken);
            yield this.userService.updateRefressToken(userId, {
                refreshToken: hashedRefreshToken,
            });
        });
    }
    hashData(data) {
        // return argon2.hash(data);
    }
    signToken(payload) {
        return (0, jsonwebtoken_1.sign)(payload, this.secret);
    }
    verifyToken(token) {
        return (0, jsonwebtoken_1.verify)(token, this.secret);
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(auth_constants_1.AUTH_SECRET)),
    tslib_1.__param(1, (0, common_1.Inject)(auth_constants_1.UNIQUE_PROP)),
    tslib_1.__param(2, (0, common_1.Inject)(auth_constants_1.USER_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [String, String, typeof (_a = typeof auth_interfaces_1.UserService !== "undefined" && auth_interfaces_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof lib_serverConfig_1.ServerConfigService !== "undefined" && lib_serverConfig_1.ServerConfigService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/guard/accessToken.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let AccessTokenGuard = class AccessTokenGuard extends (0, passport_1.AuthGuard)('jwt') {
};
AccessTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AccessTokenGuard);
exports.AccessTokenGuard = AccessTokenGuard;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/guard/refreshToken.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let RefreshTokenGuard = class RefreshTokenGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
RefreshTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], RefreshTokenGuard);
exports.RefreshTokenGuard = RefreshTokenGuard;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/strategies/jwt-refresh.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'JWT_REFRESH_SECRET',
            passReqToCallback: true,
        });
        // console.log('JWT_REFRESH_SECRET');
    }
    validate(req, payload) {
        const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
        return Object.assign(Object.assign({}, payload), { refreshToken });
    }
};
JwtRefreshStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtRefreshStrategy);
exports.JwtRefreshStrategy = JwtRefreshStrategy;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/strategies/jwt-token.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtTokenStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const auth_interfaces_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.interfaces.ts");
const auth_constants_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/auth/auth.constants.ts");
let JwtTokenStrategy = class JwtTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(UserService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'JWT_ACCESS_SECRET',
        });
        this.UserService = UserService;
    }
    validate(payload) {
        console.log(payload);
        return payload;
    }
};
JwtTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(auth_constants_1.USER_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_interfaces_1.UserService !== "undefined" && auth_interfaces_1.UserService) === "function" ? _a : Object])
], JwtTokenStrategy);
exports.JwtTokenStrategy = JwtTokenStrategy;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/auth/strategies/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_local_1 = __webpack_require__("passport-local");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'local') {
    constructor() {
        super();
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('LOCAL');
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/file-manager/file-manager.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerController = void 0;
const tslib_1 = __webpack_require__("tslib");
const multer_1 = __webpack_require__("multer");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const file_manager_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.service.ts");
// import {
//   EnumFileRoutes,
//   EnumModuleRoutes,
// } from './../../../../../shared/enums/routes.enum';
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
const printer_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/services/printer.service.ts");
let FileManagerController = class FileManagerController {
    constructor(fileManagerService, printerService) {
        this.fileManagerService = fileManagerService;
        this.printerService = printerService;
    }
    jsonFile(filename, res) {
        res.sendFile(filename, { root: this.fileManagerService.getJsonFile(filename) });
    }
    uploadFsFile(file, entity, req) {
        return this.fileManagerService.uploadFsFile(entity.path, file.filename, entity);
    }
    printTest(data) {
        return this.printerService.printTest(data);
    }
    uploadDbFile(file, entity, req) {
        return this.fileManagerService.uploadDbFile(file, entity);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(`${lib_xUtils_1.EFileUplaodRoute.json}/:filename`),
    tslib_1.__param(0, (0, common_1.Param)('filename')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FileManagerController.prototype, "jsonFile", null);
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EFileUplaodRoute.uploadFsFile),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: lib_serverConfig_1.StoreService.setUploadDir,
            filename: lib_serverConfig_1.StoreService.setFilename,
        }),
    })),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__param(2, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Express !== "undefined" && (_d = Express.Multer) !== void 0 && _d.File) === "function" ? _e : Object, typeof (_f = typeof lib_xUtils_1.IFileUploadEntity !== "undefined" && lib_xUtils_1.IFileUploadEntity) === "function" ? _f : Object, typeof (_g = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FileManagerController.prototype, "uploadFsFile", null);
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EFileUplaodRoute.printTest),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FileManagerController.prototype, "printTest", null);
tslib_1.__decorate([
    (0, common_1.Post)(lib_xUtils_1.EFileUplaodRoute.uploadDbFile),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__param(2, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof Express !== "undefined" && (_h = Express.Multer) !== void 0 && _h.File) === "function" ? _j : Object, typeof (_k = typeof lib_xUtils_1.IFileUploadEntity !== "undefined" && lib_xUtils_1.IFileUploadEntity) === "function" ? _k : Object, typeof (_l = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _l : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FileManagerController.prototype, "uploadDbFile", null);
FileManagerController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof file_manager_service_1.FileManagerService !== "undefined" && file_manager_service_1.FileManagerService) === "function" ? _a : Object, typeof (_b = typeof printer_service_1.PrinterService !== "undefined" && printer_service_1.PrinterService) === "function" ? _b : Object])
], FileManagerController);
exports.FileManagerController = FileManagerController;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/file-manager/file-manager.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const file_manager_controller_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.controller.ts");
const file_manager_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.service.ts");
const printer_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/services/printer.service.ts");
let FileManagerModule = class FileManagerModule {
};
FileManagerModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [file_manager_controller_1.FileManagerController],
        providers: [file_manager_service_1.FileManagerService, printer_service_1.PrinterService],
        exports: [file_manager_service_1.FileManagerService, printer_service_1.PrinterService],
    })
], FileManagerModule);
exports.FileManagerModule = FileManagerModule;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/file-manager/file-manager.routes.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileManagerRoutes = void 0;
const file_manager_module_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/file-manager/file-manager.module.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
exports.fileManagerRoutes = [
    {
        path: lib_xUtils_1.EFileUplaodRoute.fileManager,
        module: file_manager_module_1.FileManagerModule
    }
];


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/file-manager/file-manager.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManagerService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const fsx = tslib_1.__importStar(__webpack_require__("fs-extra"));
const electron_1 = __webpack_require__("electron");
const path_1 = __webpack_require__("path");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
let FileManagerService = class FileManagerService {
    constructor() {
        this.modelPath = 'avatar';
    }
    getJsonFile(filename) {
        if (electron_1.app && electron_1.app.isPackaged) {
            if (fsx.existsSync((0, path_1.resolve)(lib_serverConfig_1.StoreService.assetsPath, filename)))
                return (0, path_1.resolve)(lib_serverConfig_1.StoreService.assetsPath);
        }
        else {
            if (fsx.existsSync((0, path_1.join)(lib_serverConfig_1.StoreService.assetsPath, filename)))
                return (0, path_1.join)(lib_serverConfig_1.StoreService.assetsPath);
        }
    }
    uploadFsFile(folder, fileName, entity) {
        var _a;
        const uploadEntity = {};
        uploadEntity[this.modelPath] = (0, path_1.join)('/', folder, fileName);
        return (_a = this.model) === null || _a === void 0 ? void 0 : _a.findByIdAndUpdate(entity.id, {
            $set: uploadEntity
        }, {
            new: true,
        });
    }
    uploadDbFile(file, entity) {
        // console.log(file., entity);
        var _a;
        const uploadEntity = {};
        uploadEntity[this.modelPath] = file;
        // uploadEntity[this.modelPath] = join('/', folder, fileName);
        return (_a = this.model) === null || _a === void 0 ? void 0 : _a.findByIdAndUpdate(entity.id, {
            $set: uploadEntity
        }, {
            new: true,
        });
    }
};
FileManagerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FileManagerService);
exports.FileManagerService = FileManagerService;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/file-manager/services/printer.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrinterService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// const core_1 = __webpack_require__("@node-escpos/core");
// const usb_adapter_1 = tslib_1.__importDefault(__webpack_require__("@node-escpos/usb-adapter"));
let PrinterService = class PrinterService {
    printTest(data) {
        // const device = new usb_adapter_1.default();
        // device.open(function (err) {
        //     return tslib_1.__awaiter(this, void 0, void 0, function* () {
        //         if (err) {
        //             console.log(err);
        //             // handle error
        //             return;
        //         }
        //         const options = { encoding: "GB18030" /* default */ };
        //         let printer = new core_1.Printer(device, options);
        //         printer.setReverseColors(false);
        //         printer
        //             .font("a")
        //             .align("ct")
        //             .style("b")
        //             .size(1.5, 2)
        //             .spacing(1)
        //             .text("NIGER STATE GENERAL HOSPITAL MINNA")
        //             // .text("恭喜发财")
        //             // .barcode(112233445566, "EAN13", { width: 50, height: 50 })
        //             // .table(["One", "Two", "Three"])
        //             // .tableCustom(
        //             //   [
        //             //     { text: "Left", align: "LEFT", width: 0.33, style: "B" },
        //             //     { text: "Center", align: "CENTER", width: 0.33 },
        //             //     { text: "Right", align: "RIGHT", width: 0.33 },
        //             //   ],
        //             //   { encoding: "cp857", size: [1, 1] }, // Optional
        //             // )
        //             .feed(2);
        //         // inject qrimage to printer
        //         // printer = await printer.qrimage("https://github.com/node-escpos/driver")
        //         // // inject image to printer
        //         // printer = await printer.image(
        //         //   image,
        //         //   "s8" // changing with image
        //         // )
        //         printer
        //             .cut()
        //             .close();
        //     });
        // });
    }
};
PrinterService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PrinterService);
exports.PrinterService = PrinterService;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/domain/repositories/idempotency.repository.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/domain/repositories/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/domain/repositories/idempotency.repository.ts"), exports);


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/idempotency.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdempotencyModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const redis_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/redis/redis.ts");
const idempotency_repository_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/repositories/idempotency.repository.ts");
const core_1 = __webpack_require__("@nestjs/core");
const interceptors_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/interceptors/index.ts");
let IdempotencyModule = class IdempotencyModule {
};
IdempotencyModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [
            redis_1.Redis,
            idempotency_repository_1.IdempotencyRepository,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: interceptors_1.IdempotencyKeyInterceptor,
            },
        ],
        exports: [idempotency_repository_1.IdempotencyRepository],
    })
], IdempotencyModule);
exports.IdempotencyModule = IdempotencyModule;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/infra/interceptors/idempotency-key.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdempotencyKeyInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rxjs_1 = __webpack_require__("rxjs");
const operators_1 = __webpack_require__("rxjs/operators");
const repositories_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/repositories/index.ts");
const repositories_2 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/domain/repositories/index.ts");
let IdempotencyKeyInterceptor = class IdempotencyKeyInterceptor {
    constructor(idempotencyRepository) {
        this.idempotencyRepository = idempotencyRepository;
    }
    intercept(context, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctx = context.switchToHttp();
            const request = ctx.getRequest();
            const idempotencyKey = request.headers['x-idempotency-key'];
            // console.log(request.method);
            // if(request.method)
            if (idempotencyKey && request.method == 'POST') {
                console.log("IDEMP ", idempotencyKey);
                // if (!this.isValidUUID(idempotencyKey)) {
                //   throw new BadRequestException(
                //     "Header 'x-idempotency-key' must be a UUID.",
                //   );
                // }
                const idempotencyModel = yield this.idempotencyRepository.find(idempotencyKey);
                if (idempotencyModel) {
                    console.log("IDEMP exist ", idempotencyKey);
                    return (0, rxjs_1.of)(idempotencyModel.response);
                }
                yield this.idempotencyRepository.preSave(idempotencyKey);
                return next.handle().pipe((0, operators_1.tap)((data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    yield this.idempotencyRepository.update(idempotencyKey, data);
                    return data;
                })));
            }
            return next.handle();
        });
    }
    isValidUUID(uuid) {
        const uuidRegex = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u;
        return uuidRegex.test(uuid);
    }
};
IdempotencyKeyInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(repositories_1.IdempotencyRepository)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof repositories_2.IIdempotencyRepository !== "undefined" && repositories_2.IIdempotencyRepository) === "function" ? _a : Object])
], IdempotencyKeyInterceptor);
exports.IdempotencyKeyInterceptor = IdempotencyKeyInterceptor;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/infra/interceptors/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/interceptors/idempotency-key.interceptor.ts"), exports);


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/infra/redis/redis.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var Redis_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Redis = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let Redis = Redis_1 = class Redis {
    get(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(Redis_1.data.get(key));
        });
    }
    set(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            Promise.resolve(Redis_1.data.set(key, value));
        });
    }
};
Redis.data = new Map();
Redis = Redis_1 = tslib_1.__decorate([
    (0, common_1.Injectable)()
], Redis);
exports.Redis = Redis;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/infra/repositories/idempotency.repository.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdempotencyRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const redis_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/redis/redis.ts");
let IdempotencyRepository = class IdempotencyRepository {
    constructor(redis) {
        this.redis = redis;
    }
    find(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.redis.get(key);
            if (data) {
                return { key, response: data };
            }
        });
    }
    preSave(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.redis.set(key);
        });
    }
    update(key, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.redis.set(key, response);
        });
    }
};
IdempotencyRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof redis_1.Redis !== "undefined" && redis_1.Redis) === "function" ? _a : Object])
], IdempotencyRepository);
exports.IdempotencyRepository = IdempotencyRepository;


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/idempotency/infra/repositories/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/idempotency/infra/repositories/idempotency.repository.ts"), exports);


/***/ }),

/***/ "../../libs/lib-nest-modules/src/lib/lib-nest-modules.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibNestModulesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let LibNestModulesModule = class LibNestModulesModule {
};
LibNestModulesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], LibNestModulesModule);
exports.LibNestModulesModule = LibNestModulesModule;


/***/ }),

/***/ "../../libs/lib-server-config/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/server-config.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/server-config.ts"), exports);
/// SERVICES
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/services/cmd.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/services/store.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts"), exports);
/// TYPES & INTERFACES
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/types/interfaces.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-server-config/src/lib/types/types.ts"), exports);


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/server-config.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const path_1 = __webpack_require__("path");
const server_config_1 = tslib_1.__importDefault(__webpack_require__("../../libs/lib-server-config/src/lib/server-config.ts"));
const config_1 = __webpack_require__("@nestjs/config");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
const server_config_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts");
const cmd_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/cmd.service.ts");
const account_jwt_service_1 = __webpack_require__("../../libs/lib-nest-modules/src/lib/account/account-jwt.service.ts");
const store_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/store.service.ts");
const core_1 = __webpack_require__("@nestjs/core");
const server_interceptor_1 = __webpack_require__("../../libs/lib-server-config/src/lib/server.interceptor.ts");
const server_exception_filter_1 = __webpack_require__("../../libs/lib-server-config/src/lib/server-exception.filter.ts");
const configPath = (0, path_1.resolve)((0, path_1.join)(__dirname, store_service_1.StoreService.appName, 'assets', '.env'));
let ServerConfigModule = class ServerConfigModule {
    constructor(storeService) {
        this.storeService = storeService;
    }
};
ServerConfigModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_cls_1.ClsModule.forRoot({
                global: true,
                middleware: {
                    mount: true,
                },
            }),
            config_1.ConfigModule.forRoot({
                load: [server_config_1.default],
                envFilePath: configPath,
                cache: true,
            }),
        ],
        controllers: [],
        providers: [
            server_config_service_1.ServerConfigService,
            cmd_service_1.CmdService,
            account_jwt_service_1.JwtService,
            store_service_1.StoreService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: server_interceptor_1.ServerInterceptor,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: server_exception_filter_1.ServerExceptionsFilter,
            },
            // SocketGateway,
        ],
        exports: [
            config_1.ConfigModule,
            server_config_service_1.ServerConfigService,
            cmd_service_1.CmdService,
            account_jwt_service_1.JwtService,
            store_service_1.StoreService,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof store_service_1.StoreService !== "undefined" && store_service_1.StoreService) === "function" ? _a : Object])
], ServerConfigModule);
exports.ServerConfigModule = ServerConfigModule;
// 9082762040


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/server-config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppServer = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const node_turn_1 = tslib_1.__importDefault(__webpack_require__("node-turn"));
const electron_log_1 = tslib_1.__importDefault(__webpack_require__("electron-log"));
const core_1 = __webpack_require__("@nestjs/core");
const helmet_1 = tslib_1.__importDefault(__webpack_require__("helmet"));
const express_1 = tslib_1.__importDefault(__webpack_require__("express"));
const server_config_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const path_1 = __webpack_require__("path");
const os = tslib_1.__importStar(__webpack_require__("os"));
const numCPUs = os.cpus().length;
exports["default"] = (0, config_1.registerAs)('app', () => ({
    env: process.env['APP_ENV'],
    name: process.env['APP_NAME'],
    protocol: process.env['APP_PROTOCOL'],
    port: process.env['APP_PORT'],
    code: process.env['APP_CODE'],
    route: process.env['APP_ROUTE'],
}));
class AppServer {
    constructor(entryModule) {
        this.entryModule = entryModule;
        process.on('unhandledRejection', (reason, promise) => {
            console.log(reason, 'Custom unhandledRejection HERE');
        });
        process.on('uncaughtException', (reason, promise) => {
            console.log(reason, 'Custom uncaughtException');
        });
        process.on('SIGABRT', () => {
            console.log('Server Process shutdown');
        });
    }
    startNestApp() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.nestApp = yield core_1.NestFactory.create(this.entryModule);
            this.serverConfigService = this.nestApp.get(server_config_service_1.ServerConfigService);
            return this;
        });
    }
    // cluster() {
    //   if(cluster.isPrimary){
    //     console.log(`Master server started on ${process.pid}`);
    //     for (let i = 0; i < numCPUs; i++) {
    //         cluster.fork();
    //     }
    //     cluster.on('exit', (worker, code, signal) => {
    //         console.log(`Worker ${worker.process.pid} died. Restarting`);
    //         cluster.fork();
    //     })
    //     // return this;
    //   } else {
    //       console.log(`Cluster server started on ${process.pid}`)
    //       return this
    //   }
    // }
    startServer(port) {
        console.log('SERVER STAT: ', numCPUs);
        // this.cluster();
        // if(cluster.isPrimary){
        //   console.log(`Master server started on ${process.pid}`);
        //   for (let i = 0; i < numCPUs; i++) {
        //     cluster.fork();
        //   }
        //   cluster.on('exit', (worker, code, signal) => {
        //     console.log(`Worker ${worker.process.pid} died. Restarting`);
        //     cluster.fork();
        //   })
        // }else{
        //   console.log(`Cluster server started on ${process.pid}`)
        //   this.nestApp
        //     .listen(
        //         (process.env['PORT'] || port || this.serverConfigService.port)
        //     )
        //     .then((server: any) => {
        //       console.log(
        //         'Server running on: ' +
        //           this.serverConfigService.protocol +
        //           '://localhost:' +
        //           server.address().port,
        //       );
        //       this.serverConfigService._runningPort = server.address().port;
        //       // this.enableTurnServer();
        //       // this.enablePeerServer(server, '/pharmacin-peerjs');
        //     })
        //     .catch(async (error) => {
        //       console.log(error);
        //       if (error.code == 'EADDRINUSE') {
        //         const pid = await this.serverConfigService.portUsedByPID(process.pid);
        //         const kill = await this.serverConfigService.killPort(pid);
        //         if (kill?.success) {
        //           console.log('SERVER RESTAT');
        //           this.startServer();
        //         }
        //       }
        //     });
        //   this.nestApp
        //     .listen(
        //         (process.env['PORT'] || port || this.serverConfigService.port)
        //     )
        //     .then((server: any) => {
        //       console.log(
        //         'Server running on: ' +
        //           this.serverConfigService.protocol +
        //           '://localhost:' +
        //           server.address().port,
        //       );
        //       this.serverConfigService._runningPort = server.address().port;
        //       // this.enableTurnServer();
        //       // this.enablePeerServer(server, '/pharmacin-peerjs');
        //     })
        //     .catch(async (error) => {
        //       console.log(error);
        //       if (error.code == 'EADDRINUSE') {
        //         const pid = await this.serverConfigService.portUsedByPID(process.pid);
        //         const kill = await this.serverConfigService.killPort(pid);
        //         if (kill?.success) {
        //           console.log('SERVER RESTAT');
        //           this.startServer();
        //         }
        //       }
        //     });
        // }
        this.nestApp
            .listen((process.env['PORT'] || port || this.serverConfigService.port))
            .then((server) => {
            console.log('Server running on: ' +
                this.serverConfigService.protocol +
                '://localhost:' +
                server.address().port);
            this.serverConfigService._runningPort = server.address().port;
            // this.enableTurnServer();
            // this.enablePeerServer(server, '/pharmacin-peerjs');
        })
            .catch((error) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(error);
            if (error.code == 'EADDRINUSE') {
                const pid = yield this.serverConfigService.portUsedByPID(process.pid);
                const kill = yield this.serverConfigService.killPort(pid);
                if (kill === null || kill === void 0 ? void 0 : kill.success) {
                    console.log('SERVER RESTAT');
                    this.startServer();
                }
            }
        }));
        return this;
    }
    enableHelmet(helmetOptions) {
        this.nestApp.use((0, helmet_1.default)(helmetOptions));
        return this;
    }
    enableExpress() {
        this.nestApp.use(express_1.default.text({ limit: '50mb' }));
        this.nestApp.use(express_1.default.json({ limit: '50mb' }));
        this.nestApp.use(express_1.default.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000,
        }));
        return this;
    }
    serveUploads(assets) {
        assets.forEach(asset => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            console.log((0, path_1.join)((_b = (_a = this.serverConfigService) === null || _a === void 0 ? void 0 : _a.appRoute) === null || _b === void 0 ? void 0 : _b.toLowerCase(), ((_d = (_c = this.serverConfigService) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.toLowerCase()) + '-' + lib_xUtils_1.EFileUploadDir.uploads.replace('/', ''), asset));
            this.nestApp.use(((_f = (_e = this.serverConfigService) === null || _e === void 0 ? void 0 : _e.appRoute) === null || _f === void 0 ? void 0 : _f.toLowerCase()) + "/" +
                ((_h = (_g = this.serverConfigService) === null || _g === void 0 ? void 0 : _g.name) === null || _h === void 0 ? void 0 : _h.toLowerCase()) + '-' + lib_xUtils_1.EFileUploadDir.uploads.replace('/', ''), express_1.default.static(asset));
            // this.nestApp.use(
            //   asset,
            //   express.static(
            //     this.serverConfigService?.appRoute?.toLowerCase() + "/"+
            //     this.serverConfigService?.name?.toLowerCase() +'-' +EFileUploadDir.uploads.replace('/', '') as any
            //   )
            // )
            // this.nestApp.useStaticAssets(
            //   asset as any,
            //   {
            //     prefix:
            //       this.serverConfigService?.appRoute?.toLowerCase() + "/"+
            //       this.serverConfigService?.name?.toLowerCase() +'-' +EFileUploadDir.uploads.replace('/', '')
            //   }
            // )
        });
        return this;
    }
    enableGlobals(options = {
        logger: true,
        routePrefix: true,
        cors: true,
    }) {
        options.logger ? this.nestApp.useLogger(electron_log_1.default) : null;
        options.routePrefix
            ? this.nestApp.setGlobalPrefix(this.serverConfigService.appRoute)
            : null;
        options.cors ? this.nestApp.enableCors() : null;
        return this;
    }
    enableTurnServer() {
        const turn = new node_turn_1.default({
            authMech: 'long-term',
            listeningPort: this.serverConfigService._runningPort,
            debug(debugLevel, message) {
                console.log(debugLevel, message);
            },
        });
        turn.start();
        return this;
    }
    enablePeerServer(server, peerPath) {
        // const peerServer = ExpressPeerServer(server);
        // this.nestApp.use(peerPath, peerServer);
        return this;
    }
}
exports.AppServer = AppServer;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/server-exception.filter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerExceptionsFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
// Filter to catch All Http related Exceptions, format the errors and return them
// IbnAdam - Sat 5th, Nov 2022 - 8:42 PM
let ServerExceptionsFilter = class ServerExceptionsFilter {
    catch(exception, host) {
        var _a;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        // Get error response status
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        // Format the error
        const responseMessage = (type, message) => {
            if (type == 'MongooseServerSelectionError')
                message = 'Database connection error, please contact Admin.';
            else if (type == 'ValidationError')
                message = lib_xUtils_1.EErrorMessages.invalidForm;
            else if (status == 404 && request.method !== 'POST')
                message = 'Requested resource not found';
            // else if(message.includes('duplicate key'))
            //   // message
            //   console.log(type);
            const msg = {
                statusCode: status,
                path: request.url,
                errorType: type,
                errorMessage: message,
                timestamp: new Date().toISOString(),
            };
            // Send the error
            console.error(exception);
            response.status(status).json(msg);
        };
        // Mongoose VS regular error
        if ((_a = exception === null || exception === void 0 ? void 0 : exception.message) === null || _a === void 0 ? void 0 : _a.error) {
            return responseMessage('Error', exception.message.error);
        }
        else {
            //////// Mongoose Error
            if (exception.code == 11000) {
                const value = Object.values(exception.keyValue)[0];
                const key = Object.keys(exception.keyValue)[0];
                return responseMessage(exception.name, 'Duplicate ' +
                    (key === null || key === void 0 ? void 0 : key.toUpperCase()) +
                    ' for value: ' +
                    value +
                    '. Please try another VALUE.');
            }
            if ((exception === null || exception === void 0 ? void 0 : exception.toString().includes('MongooseError')) && (exception === null || exception === void 0 ? void 0 : exception.toString().includes('buffering timed'))) {
                return responseMessage('StoreError', "Data store operation error, please contact Admin.");
            }
            return responseMessage(exception.name, exception.message);
        }
    }
};
ServerExceptionsFilter = tslib_1.__decorate([
    (0, common_1.Catch)()
], ServerExceptionsFilter);
exports.ServerExceptionsFilter = ServerExceptionsFilter;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/server.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rxjs_1 = __webpack_require__("rxjs");
const server_config_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts");
const nestjs_cls_1 = __webpack_require__("nestjs-cls");
let ServerInterceptor = class ServerInterceptor {
    constructor(serverConfigService, cls) {
        this.serverConfigService = serverConfigService;
        this.cls = cls;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        // Exclude file upload FormData from encryption and decryption
        // console.log((request as Request).url);
        this.cls.set('appName', 'salona');
        let raw = request.header('raw');
        // console.log(
        //   Boolean(request.file) || Boolean(request.files) ?
        //   'FILE PRESENT' : 'FILE NOT PRESENT', raw, typeof request.body, request.body, request.file
        // );
        Boolean(request.file) || Boolean(request.files) ? raw = true : raw = raw;
        // let ip = request.header('x-forwarded-for') || request.connection.remoteAddress;
        // console.log(request.headers['user-agent']);
        // console.log(ip);
        // console.log(raw ? 'NO ENCRYPT' : 'ENCRYPT', raw);
        // // incoming
        // return null as any;
        request.body =
            typeof request.body == 'string' && !raw
                ? JSON.parse(this.serverConfigService.decryptClientRequest(request.body))
                : request.body;
        // // outgoing
        return next.handle().pipe((0, rxjs_1.map)((res) => {
            // Return null if server returns no response
            res == null ? (res = null) : res;
            if (request.url.includes('datastream'))
                return JSON.stringify(res);
            res = !raw
                ? this.serverConfigService.encryptServerResponse(res)
                : res;
            return res;
        }));
    }
};
ServerInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof server_config_service_1.ServerConfigService !== "undefined" && server_config_service_1.ServerConfigService) === "function" ? _a : Object, typeof (_b = typeof nestjs_cls_1.ClsService !== "undefined" && nestjs_cls_1.ClsService) === "function" ? _b : Object])
], ServerInterceptor);
exports.ServerInterceptor = ServerInterceptor;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/services/cmd.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmdService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const child_process_1 = __webpack_require__("child_process");
const cmdPrompt = tslib_1.__importStar(__webpack_require__("@vscode/sudo-prompt"));
let CmdService = class CmdService {
    execCmd(cmd) {
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
                if (error) {
                    console.warn(`Error could not execute the command "${cmd}" \n`, error.message);
                }
                else if (stdout) {
                    // console.log(stdout);
                }
                else {
                    console.log(stderr);
                }
                resolve({
                    success: stdout ? true : false,
                    msg: stdout,
                    accessDenied: stderr && stderr.includes('Access') ? true : false,
                });
            });
        });
    }
    execCmdAdmin(cmd) {
        return new Promise((resolve, reject) => {
            const options = {
                name: 'Admin User',
            };
            cmdPrompt.exec(cmd, options, (error, stdout, stderr) => {
                if (error) {
                    console.warn(`Error could not execute the command "${cmd}" \n`, error.message);
                }
                else if (stdout)
                    console.log('');
                else {
                    console.log('');
                }
                resolve({
                    success: stdout ? true : false,
                    accessDenied: error && (stderr === null || stderr === void 0 ? void 0 : stderr.includes('Access')) ? true : false,
                    msg: stdout,
                });
            });
        });
    }
    // Run a given command with Admin rights when necessary.
    runCmd(cmd) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let cmdRes = yield this.execCmd(cmd);
            // console.log(cmdRes);
            if (cmdRes.accessDenied)
                return (cmdRes = yield this.execCmdAdmin(cmd));
            return cmdRes;
        });
    }
    isServiceRunning(serviceName) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cmdRes = yield this.runCmd(`WMIC Service WHERE "Name = '${serviceName}'" GET Started`);
            return Boolean((_b = (_a = cmdRes.msg) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes('true'));
        });
    }
    isServiceAvailable(serviceName) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cmdRes = yield this.runCmd(`WMIC Service WHERE "Name = '${serviceName}'"`);
            return Boolean((_b = (_a = cmdRes.msg) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(serviceName === null || serviceName === void 0 ? void 0 : serviceName.toLowerCase()));
        });
    }
};
CmdService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CmdService);
exports.CmdService = CmdService;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/services/server-config.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerConfigService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const crypto_js_1 = __webpack_require__("crypto-js");
const cmd_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/cmd.service.ts");
const config_1 = __webpack_require__("@nestjs/config");
let ServerConfigService = class ServerConfigService {
    constructor(_configService, cmdService) {
        this._configService = _configService;
        this.cmdService = cmdService;
    }
    get name() {
        return this._configService.get('app.name');
    }
    get env() {
        return this._configService.get('app.env');
    }
    get protocol() {
        return this._configService.get('app.protocol');
    }
    get port() {
        return Number(this._configService.get('app.port'));
        //this.realPort || format(new Date(), 'yyMM');
    }
    get appCode() {
        return this._configService.get('app.code');
    }
    get appRoute() {
        return this._configService.get('app.route');
    }
    encryptServerResponse(data) {
        return crypto_js_1.AES.encrypt(JSON.stringify(data), this._runningPort.toString()).toString();
    }
    decryptClientRequest(data) {
        return crypto_js_1.AES.decrypt(data, this._runningPort.toString()).toString(crypto_js_1.enc.Utf8);
    }
    portUsedByPID(currentPID) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const cmd = yield this.cmdService.runCmd(`netstat -aon | findstr :${this.port}`);
                const pid = (_b = (_a = cmd.msg
                    .toString()) === null || _a === void 0 ? void 0 : _a.split('+')[0].match(/LISTENING\s+\d+/g)[0]) === null || _b === void 0 ? void 0 : _b.match(/\d+/g)[0];
                return Number(pid) || Number(currentPID);
            }
            catch (error) {
                console.log(error);
            }
            return 0;
        });
    }
    killPort(pid, force = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pid)
                return;
            if (isNaN(pid)) {
                throw new Error('PID must be a number.');
            }
            return yield this.cmdService.runCmd('taskkill /PID ' + pid + (force == true ? ' /f' : ''));
        });
    }
};
ServerConfigService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof cmd_service_1.CmdService !== "undefined" && cmd_service_1.CmdService) === "function" ? _b : Object])
], ServerConfigService);
exports.ServerConfigService = ServerConfigService;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/services/store.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var StoreService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const crypto_1 = __webpack_require__("crypto");
const electron_1 = __webpack_require__("electron");
const path_1 = tslib_1.__importStar(__webpack_require__("path"));
const fsx = tslib_1.__importStar(__webpack_require__("fs-extra"));
const server_config_service_1 = __webpack_require__("../../libs/lib-server-config/src/lib/services/server-config.service.ts");
const lib_xUtils_1 = __webpack_require__("../../libs/lib-x/src/index.ts");
let StoreService = StoreService_1 = class StoreService {
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
        StoreService_1.appConfig = this.appConfigService;
        // try {
        //   for (const [key, value] of Object.entries(EFileUploadDir)) {
        //     if (key == 'public') continue;
        //     fsx.ensureDirSync(
        //       resolve(join(StoreService.uploadRootDir as any, value)),
        //     );
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
    }
    static setUploadDir(req, file, cb) {
        if (!electron_1.app)
            return '';
        try {
            const entity = req.query;
            const uploadDir = (0, path_1.join)(StoreService_1.uploadRootDir, entity.path);
            if (entity.oldRef && entity.oldRef !== 'null')
                StoreService_1.removeFile((0, path_1.resolve)((0, path_1.join)(StoreService_1.uploadRootDir, entity.oldRef)));
            try {
                cb(null, uploadDir);
            }
            catch (error) {
                console.log('ERROR Uppload DIr');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    static setFilename(req, file, cb) {
        try {
            cb(null, `${(0, crypto_1.randomUUID)()}.${file.mimetype.split('/')[1]}`);
        }
        catch (error) {
            console.log(error);
            throw new Error(lib_xUtils_1.EErrorMessages.invalidUploadFilename);
        }
    }
    static removeFile(fileLink) {
        try {
            if (fsx.existsSync(fileLink))
                fsx.unlinkSync(fileLink);
        }
        catch (error) {
            console.log(error, 'REMOVE ERROR');
        }
    }
    get buildDir() {
        return electron_1.app && electron_1.app.isPackaged
            ? (0, path_1.resolve)((0, path_1.join)('.', 'resources', 'build'))
            : (0, path_1.resolve)((0, path_1.join)('.', 'build'));
    }
    static staticSitePath(appName, anyPath = false) {
        // console.log(resolve('.'));
        const isDev = (0, path_1.resolve)('.').includes('healma') || (0, path_1.resolve)('.').includes('healmah');
        // return ''
        return !isDev ?
            (0, path_1.resolve)(path_1.default.join('.', appName + '-ui')) :
            anyPath ?
                (0, path_1.resolve)((0, path_1.join)('.', 'dist', 'apps', appName + '-ui')) :
                (0, path_1.resolve)((0, path_1.join)('.', 'dist', 'apps', appName, appName + '-ui'));
    }
    static get uploadRootDir() {
        var _a, _b;
        if (!electron_1.app)
            return;
        return (0, path_1.join)(electron_1.app === null || electron_1.app === void 0 ? void 0 : electron_1.app.getPath('appData'), ((_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()) + '-' + lib_xUtils_1.EFileUploadDir.uploads.replace('/', ''));
        // return app
        // ? join(app.getPath('appData'), EnumUploadDir.root)
        // : join('./', '../', EnumUploadDir.root);
    }
    static get appName() {
        var _a, _b;
        let appName = electron_1.app === null || electron_1.app === void 0 ? void 0 : electron_1.app.getName();
        if (appName === null || appName === void 0 ? void 0 : appName.includes('-')) {
            appName = (_a = appName.split('-').at(0)) !== null && _a !== void 0 ? _a : appName;
        }
        else if (appName === null || appName === void 0 ? void 0 : appName.includes(' ')) {
            appName = (_b = appName.split(' ').at(0)) !== null && _b !== void 0 ? _b : appName;
        }
        return electron_1.app && (electron_1.app === null || electron_1.app === void 0 ? void 0 : electron_1.app.isPackaged) ? appName : '';
    }
    static get assetsPath() {
        const isDev = (0, path_1.resolve)('.').includes('healmah') || (0, path_1.resolve)('.').includes('healmah');
        const path = isDev ?
            (0, path_1.resolve)(electron_1.app.getAppPath(), 'assets') : (0, path_1.resolve)(__dirname, StoreService_1.appName, 'assets');
        return path;
    }
};
StoreService = StoreService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof server_config_service_1.ServerConfigService !== "undefined" && server_config_service_1.ServerConfigService) === "function" ? _a : Object])
], StoreService);
exports.StoreService = StoreService;


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/types/interfaces.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-server-config/src/lib/types/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.account.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.inventory.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/dispensary.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.settings.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.services.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.health-program.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.record.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/enum.x.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/enums/planix-routes.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.account.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.inventory.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/dispensary.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.settings.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.health-program.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/record.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/interfaces/interface.x.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/types/type.account.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/types/type.inventory.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/types/type.health-program.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/types/type.x.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/util-fns/arrays.util.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/util-fns/math.util.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/util-fns/date.util.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/lib-x/src/lib/util-fns/node-printer.util.ts"), exports);


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/dispensary.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERmdDispensaryQuery = exports.ERmdStockStore = exports.EVetDispensaryStore = exports.EVetDispensaryQuery = exports.ECinDispensaryQuery = exports.ECinDispensaryConfig = exports.ECinDispensaryStore = void 0;
var ECinDispensaryStore;
(function (ECinDispensaryStore) {
    ECinDispensaryStore["dispensaryStore"] = "dispensary-store";
    ECinDispensaryStore["saleItems"] = "sale-items";
    ECinDispensaryStore["dispenseOrder"] = "dispense-order";
    ECinDispensaryStore["returnSaleItems"] = "return-sale-items";
})(ECinDispensaryStore = exports.ECinDispensaryStore || (exports.ECinDispensaryStore = {}));
var ECinDispensaryConfig;
(function (ECinDispensaryConfig) {
    ECinDispensaryConfig["dispensaryConfig"] = "dispensary-config";
    ECinDispensaryConfig["printSmallReceipt"] = "print-small-receipt";
})(ECinDispensaryConfig = exports.ECinDispensaryConfig || (exports.ECinDispensaryConfig = {}));
var ECinDispensaryQuery;
(function (ECinDispensaryQuery) {
    ECinDispensaryQuery["dispensaryQuery"] = "dispensary-query";
    ECinDispensaryQuery["dispenseHistory"] = "dispense-history";
    ECinDispensaryQuery["dispensaryReport"] = "dispensary-report";
})(ECinDispensaryQuery = exports.ECinDispensaryQuery || (exports.ECinDispensaryQuery = {}));
var EVetDispensaryQuery;
(function (EVetDispensaryQuery) {
    EVetDispensaryQuery["dispensaryQuery"] = "dispensary-query";
    EVetDispensaryQuery["saleItems"] = "sale-items";
    EVetDispensaryQuery["saleHistory"] = "sale-history";
    EVetDispensaryQuery["sales"] = "sales";
    EVetDispensaryQuery["returnSaleItems"] = "return-sale-items";
})(EVetDispensaryQuery = exports.EVetDispensaryQuery || (exports.EVetDispensaryQuery = {}));
var EVetDispensaryStore;
(function (EVetDispensaryStore) {
    EVetDispensaryStore["dispensaryStore"] = "dispensary-store";
    EVetDispensaryStore["sale"] = "sale";
    EVetDispensaryStore["returnSaleItems"] = "return-sale-items";
})(EVetDispensaryStore = exports.EVetDispensaryStore || (exports.EVetDispensaryStore = {}));
var ERmdStockStore;
(function (ERmdStockStore) {
    ERmdStockStore["stockStore"] = "stock-store";
})(ERmdStockStore = exports.ERmdStockStore || (exports.ERmdStockStore = {}));
var ERmdDispensaryQuery;
(function (ERmdDispensaryQuery) {
    ERmdDispensaryQuery["dispensaryQuery"] = "dispensary-query";
    ERmdDispensaryQuery["saleItems"] = "sale-items";
    ERmdDispensaryQuery["saleHistory"] = "sale-history";
    ERmdDispensaryQuery["sales"] = "sales";
    ERmdDispensaryQuery["returnSaleItems"] = "return-sale-items";
})(ERmdDispensaryQuery = exports.ERmdDispensaryQuery || (exports.ERmdDispensaryQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.account.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EAccountQuery = exports.EAccountStore = void 0;
var EAccountStore;
(function (EAccountStore) {
    EAccountStore["accountStore"] = "account-store";
    EAccountStore["profile"] = "profile";
    EAccountStore["print"] = "print";
})(EAccountStore = exports.EAccountStore || (exports.EAccountStore = {}));
var EAccountQuery;
(function (EAccountQuery) {
    EAccountQuery["accountQuery"] = "account-query";
    EAccountQuery["staffProfile"] = "staffProfile";
    EAccountQuery["staffProfileLogin"] = "staff-login";
    EAccountQuery["staffProfiles"] = "staffProfiles";
})(EAccountQuery = exports.EAccountQuery || (exports.EAccountQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.health-program.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EHealthProgramQuery = exports.EHealthProgramStore = void 0;
var EHealthProgramStore;
(function (EHealthProgramStore) {
    EHealthProgramStore["healthProgramStore"] = "health-program-store";
    EHealthProgramStore["saveHealthProgram"] = "save-health-program";
    EHealthProgramStore["deleteHealthProgram"] = "save-health-program";
})(EHealthProgramStore = exports.EHealthProgramStore || (exports.EHealthProgramStore = {}));
var EHealthProgramQuery;
(function (EHealthProgramQuery) {
    EHealthProgramQuery["healthProgramQuery"] = "health-program-query";
    EHealthProgramQuery["getHealthProgram"] = "get-health-program";
    EHealthProgramQuery["getHealthPrograms"] = "get-health-programs";
})(EHealthProgramQuery = exports.EHealthProgramQuery || (exports.EHealthProgramQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.inventory.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVetDashboardQuery = exports.EInventoryStockQuery = exports.EInventoryStockStore = exports.EInventoryStockConfig = void 0;
var EInventoryStockConfig;
(function (EInventoryStockConfig) {
    EInventoryStockConfig["stockConfig"] = "stock-config";
    EInventoryStockConfig["stockVendor"] = "stock-vendor";
    EInventoryStockConfig["stockUnit"] = "stock-unit";
    EInventoryStockConfig["expenditure"] = "expenditure";
    EInventoryStockConfig["expenditureRemarks"] = "expenditure-remarks";
})(EInventoryStockConfig = exports.EInventoryStockConfig || (exports.EInventoryStockConfig = {}));
var EInventoryStockStore;
(function (EInventoryStockStore) {
    EInventoryStockStore["stockStore"] = "stock-store";
    EInventoryStockStore["stockPurchase"] = "stock-purchase";
    EInventoryStockStore["changeStockName"] = "change-stock-name";
    EInventoryStockStore["stockLevelModerator"] = "stock-level-moderator";
})(EInventoryStockStore = exports.EInventoryStockStore || (exports.EInventoryStockStore = {}));
var EInventoryStockQuery;
(function (EInventoryStockQuery) {
    EInventoryStockQuery["stockPurchase"] = "stock-purchase";
    EInventoryStockQuery["stockQuery"] = "stock-query";
    EInventoryStockQuery["activeStocks"] = "active-stocks";
    EInventoryStockQuery["allStocks"] = "all-stocks";
    EInventoryStockQuery["oldStocks"] = "old-stocks";
    EInventoryStockQuery["expiryStocks"] = "expiry-stocks";
    EInventoryStockQuery["outOfStocks"] = "out-of-stocks";
    EInventoryStockQuery["purchaseVendors"] = "purchase-vendors";
})(EInventoryStockQuery = exports.EInventoryStockQuery || (exports.EInventoryStockQuery = {}));
var EVetDashboardQuery;
(function (EVetDashboardQuery) {
    EVetDashboardQuery["dashboardQuery"] = "dashboard-query";
    EVetDashboardQuery["overview"] = "overview";
    EVetDashboardQuery["income"] = "income";
    EVetDashboardQuery["dashboard"] = "dashboard";
})(EVetDashboardQuery = exports.EVetDashboardQuery || (exports.EVetDashboardQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.record.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EHomasRecordQuery = exports.EHomasRecordStore = void 0;
var EHomasRecordStore;
(function (EHomasRecordStore) {
    EHomasRecordStore["recordStore"] = "record-store";
    EHomasRecordStore["patient"] = "patient";
    EHomasRecordStore["print"] = "print";
})(EHomasRecordStore = exports.EHomasRecordStore || (exports.EHomasRecordStore = {}));
var EHomasRecordQuery;
(function (EHomasRecordQuery) {
    EHomasRecordQuery["recordQuery"] = "record-query";
    EHomasRecordQuery["patient"] = "patient";
})(EHomasRecordQuery = exports.EHomasRecordQuery || (exports.EHomasRecordQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.services.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EGameQuery = exports.EGameStore = exports.EServicesQuery = exports.EServicesStore = void 0;
var EServicesStore;
(function (EServicesStore) {
    EServicesStore["servicesStore"] = "services-store";
    EServicesStore["saveService"] = "save-services";
    EServicesStore["deleteService"] = "delete-service";
    EServicesStore["deleteRenderedService"] = "delete-rendered-service";
    EServicesStore["renderService"] = "render-service";
})(EServicesStore = exports.EServicesStore || (exports.EServicesStore = {}));
var EServicesQuery;
(function (EServicesQuery) {
    EServicesQuery["servicesQuery"] = "services-query";
    EServicesQuery["getServices"] = "get-services";
    EServicesQuery["getRenderedService"] = "get-rendered-services";
    EServicesQuery["getRenderedDashoardService"] = "get-rendered-dashboard-services";
})(EServicesQuery = exports.EServicesQuery || (exports.EServicesQuery = {}));
var EGameStore;
(function (EGameStore) {
    EGameStore["gameStore"] = "game-store";
    EGameStore["game"] = "game";
    EGameStore["gamePlay"] = "game-play";
    EGameStore["gameHistory"] = "game-history";
})(EGameStore = exports.EGameStore || (exports.EGameStore = {}));
var EGameQuery;
(function (EGameQuery) {
    EGameQuery["gameQuery"] = "game-query";
    EGameQuery["gameHistory"] = "game-history";
    EGameQuery["games"] = "games";
    EGameQuery["gameHome"] = "game-home";
})(EGameQuery = exports.EGameQuery || (exports.EGameQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.settings.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EHomasHospitalInfoQuery = exports.EHomasHospitalInfoStore = exports.EHomasHealthProgramQuery = exports.EHomasHealthProgramStore = exports.ESettingsQuery = exports.ESettingsStore = void 0;
var ESettingsStore;
(function (ESettingsStore) {
    ESettingsStore["settingsStore"] = "settings-store";
    ESettingsStore["saveSettings"] = "save-settings";
    ESettingsStore["shopBranch"] = "shop-branch";
    ESettingsStore["expenditure"] = "expenditure";
    ESettingsStore["expenditureAdmin"] = "expenditure";
    ESettingsStore["todo"] = "todo";
    ESettingsStore["staffPay"] = "staff-pay";
})(ESettingsStore = exports.ESettingsStore || (exports.ESettingsStore = {}));
var ESettingsQuery;
(function (ESettingsQuery) {
    ESettingsQuery["settingsQuery"] = "settings-query";
    ESettingsQuery["getSettings"] = "get-settings";
    ESettingsQuery["shopBranch"] = "shop-branch";
    ESettingsQuery["expenditure"] = "expenditure";
    ESettingsQuery["expenditureAdmin"] = "expenditure";
    ESettingsQuery["todo"] = "todo";
    ESettingsQuery["staffPay"] = "staff-pay";
})(ESettingsQuery = exports.ESettingsQuery || (exports.ESettingsQuery = {}));
/////////////////////////////// HOMAS SETTINGS //////////////////////////////////////////////
var EHomasHealthProgramStore;
(function (EHomasHealthProgramStore) {
    EHomasHealthProgramStore["healthProgramStore"] = "health-program-store";
})(EHomasHealthProgramStore = exports.EHomasHealthProgramStore || (exports.EHomasHealthProgramStore = {}));
var EHomasHealthProgramQuery;
(function (EHomasHealthProgramQuery) {
    EHomasHealthProgramQuery["healthProgramQuery"] = "health-program-query";
})(EHomasHealthProgramQuery = exports.EHomasHealthProgramQuery || (exports.EHomasHealthProgramQuery = {}));
var EHomasHospitalInfoStore;
(function (EHomasHospitalInfoStore) {
    EHomasHospitalInfoStore["hospitalInfoStore"] = "hospital-info-store";
})(EHomasHospitalInfoStore = exports.EHomasHospitalInfoStore || (exports.EHomasHospitalInfoStore = {}));
var EHomasHospitalInfoQuery;
(function (EHomasHospitalInfoQuery) {
    EHomasHospitalInfoQuery["hospitalInfoQuery"] = "hospital-info-query";
})(EHomasHospitalInfoQuery = exports.EHomasHospitalInfoQuery || (exports.EHomasHospitalInfoQuery = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/enum.x.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ESuccessMesssages = exports.EErrorMessages = exports.EFontTheme = exports.EIpcHandleChannels = exports.EIpcListenChannels = exports.EFileUplaodRoute = exports.EFileUploadDir = exports.EAccountType = exports.EHomasAppModules = exports.EDataStreamUrl = exports.ECommonAppModule = exports.EFeatureAppModule = exports.ECoreAppModule = void 0;
var ECoreAppModule;
(function (ECoreAppModule) {
    ECoreAppModule["Admin"] = "Admin";
    ECoreAppModule["Inventory"] = "Inventory";
    ECoreAppModule["Dispensary"] = "Dispensary";
    ECoreAppModule["Cashier"] = "Cashier";
    ECoreAppModule["Provision"] = "Provision";
    ECoreAppModule["Clinic"] = "Clinic";
})(ECoreAppModule = exports.ECoreAppModule || (exports.ECoreAppModule = {}));
var EFeatureAppModule;
(function (EFeatureAppModule) {
    EFeatureAppModule["SERVICE"] = "SERVICE";
    EFeatureAppModule["GAME"] = "GAME";
    EFeatureAppModule["STOCK"] = "STOCK";
    EFeatureAppModule["Setting"] = "Setting";
    EFeatureAppModule["DataChannel"] = "DataChannel";
})(EFeatureAppModule = exports.EFeatureAppModule || (exports.EFeatureAppModule = {}));
var ECommonAppModule;
(function (ECommonAppModule) {
    ECommonAppModule["Account"] = "Account";
    ECommonAppModule["Settings"] = "Settings";
})(ECommonAppModule = exports.ECommonAppModule || (exports.ECommonAppModule = {}));
var EDataStreamUrl;
(function (EDataStreamUrl) {
    EDataStreamUrl["serverTime"] = "server-time";
})(EDataStreamUrl = exports.EDataStreamUrl || (exports.EDataStreamUrl = {}));
var EHomasAppModules;
(function (EHomasAppModules) {
    EHomasAppModules["admin"] = "Admin";
    EHomasAppModules["doctor"] = "Doctor";
    EHomasAppModules["pharmacy"] = "Pharmacy";
    EHomasAppModules["laboratory"] = "Laboratory";
    EHomasAppModules["nurse"] = "Nurse";
    EHomasAppModules["record"] = "Record";
})(EHomasAppModules = exports.EHomasAppModules || (exports.EHomasAppModules = {}));
var EAccountType;
(function (EAccountType) {
    EAccountType["super"] = "Super";
    EAccountType["standard"] = "Standard";
    EAccountType["basic"] = "Basic";
})(EAccountType = exports.EAccountType || (exports.EAccountType = {}));
var EFileUploadDir;
(function (EFileUploadDir) {
    EFileUploadDir["public"] = "/public";
    EFileUploadDir["uploads"] = "/uploads";
    EFileUploadDir["temp"] = "/temp";
    EFileUploadDir["setting"] = "/setting-file";
    EFileUploadDir["staff"] = "/user-account";
    EFileUploadDir["patient"] = "/patient-account";
    EFileUploadDir["customer"] = "/customer-file";
    EFileUploadDir["chat"] = "/chat-file";
})(EFileUploadDir = exports.EFileUploadDir || (exports.EFileUploadDir = {}));
var EFileUplaodRoute;
(function (EFileUplaodRoute) {
    EFileUplaodRoute["fileManager"] = "file-manager";
    EFileUplaodRoute["uploadFsFile"] = "upload-fs-file";
    EFileUplaodRoute["uploadFsFiles"] = "upload-fs-files";
    EFileUplaodRoute["uploadDbFile"] = "upload-db-file";
    EFileUplaodRoute["uploadDbFiles"] = "upload-db-files";
    EFileUplaodRoute["fsFile"] = "fs-file";
    EFileUplaodRoute["fsFiles"] = "fs-files";
    EFileUplaodRoute["dbFile"] = "db-file";
    EFileUplaodRoute["dbFiles"] = "db-files";
    EFileUplaodRoute["json"] = "json";
    EFileUplaodRoute["printTest"] = "print-test";
})(EFileUplaodRoute = exports.EFileUplaodRoute || (exports.EFileUplaodRoute = {}));
var EIpcListenChannels;
(function (EIpcListenChannels) {
    EIpcListenChannels["min"] = "min";
    EIpcListenChannels["clo"] = "clo";
    EIpcListenChannels["restore"] = "restore";
    EIpcListenChannels["unMax"] = "unMax";
    EIpcListenChannels["relaunch"] = "relaunch";
    EIpcListenChannels["quit"] = "quit";
    EIpcListenChannels["titleBar"] = "titleBar";
    EIpcListenChannels["loginScreen"] = "loginScreen";
    EIpcListenChannels["loginWindow"] = "loginWindow";
    EIpcListenChannels["mainWindow"] = "mainWindow";
    EIpcListenChannels["loadMainUrl"] = "loadMainUrl";
    EIpcListenChannels["hide"] = "hide";
    EIpcListenChannels["dev"] = "dev";
    EIpcListenChannels["saveFile"] = "saveFile";
})(EIpcListenChannels = exports.EIpcListenChannels || (exports.EIpcListenChannels = {}));
var EIpcHandleChannels;
(function (EIpcHandleChannels) {
    EIpcHandleChannels["pdfjsPath"] = "pdfjsPath";
    EIpcHandleChannels["pdfOpen"] = "pdfOpen";
    EIpcHandleChannels["max"] = "max";
    EIpcHandleChannels["maxSlide"] = "maxSlide";
    EIpcHandleChannels["isMax"] = "isMax";
    EIpcHandleChannels["appVersion"] = "appVersion";
    EIpcHandleChannels["mainWindow"] = "mainWindow";
    EIpcHandleChannels["movingWindow"] = "movingWindow";
    EIpcHandleChannels["movedWindow"] = "movedWindow";
    EIpcHandleChannels["pdfFileExtract"] = "pdfFileExtract";
})(EIpcHandleChannels = exports.EIpcHandleChannels || (exports.EIpcHandleChannels = {}));
var EFontTheme;
(function (EFontTheme) {
    EFontTheme["Cambria"] = "Cambria";
    EFontTheme["Calibri"] = "Calibri";
    EFontTheme["Cursive"] = "cursive";
    EFontTheme["Monospace"] = "monospace";
    EFontTheme["Segoe"] = "Segoe UI";
    EFontTheme["Times"] = "Times";
})(EFontTheme = exports.EFontTheme || (exports.EFontTheme = {}));
var EErrorMessages;
(function (EErrorMessages) {
    EErrorMessages["invalidForm"] = "Please fill in all the required fields properly.";
    EErrorMessages["invalidFile"] = "No file selected, please do select a file.";
    EErrorMessages["invalidFileType"] = "Invalid file type, please choose the correct file type.";
    EErrorMessages["invalidUploadDir"] = "Error, could not set up upload folder.";
    EErrorMessages["invalidUploadFilename"] = "Error, could not set up upload file name.";
    EErrorMessages["unauthorized"] = "Unauthorized acess, please login, or contact Admin.";
    EErrorMessages["sessionExpired"] = "Session expired, please login again.";
})(EErrorMessages = exports.EErrorMessages || (exports.EErrorMessages = {}));
var ESuccessMesssages;
(function (ESuccessMesssages) {
    ESuccessMesssages["formSaved"] = "Data saved successfully.";
    ESuccessMesssages["itemDeleted"] = "successfully deleted.";
})(ESuccessMesssages = exports.ESuccessMesssages || (exports.ESuccessMesssages = {}));


/***/ }),

/***/ "../../libs/lib-x/src/lib/enums/planix-routes.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ePlanixModules = exports.ePlanixRoutes = exports.ePlanixSettingsStore = void 0;
exports.ePlanixSettingsStore = {
    auth: 'auth',
    signUp: 'sign-up',
    signIn: 'sign-in',
    account: 'account',
    code: 'codes',
    settings: 'settings',
    lga: 'lga'
};
exports.ePlanixRoutes = {
    sector: 'sector',
    dataTemplate: 'data-template',
    dataEntry: 'data-entry',
    dataEntryView: 'data-entry-view',
    dashboard: 'dashboard-query',
};
exports.ePlanixModules = {
    SECTORS: 'SECTORS',
    DATATEMPLATE: 'DATATEMPLATE',
    DATAENTRY: 'DATAENTRY',
    ADMIN: 'ADMIN'
};


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/dispensary.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.account.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.health-program.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.inventory.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.service.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.settings.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/interface.x.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/interfaces/record.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/types/type.account.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/types/type.health-program.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/types/type.inventory.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/types/type.x.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/lib-x/src/lib/util-fns/arrays.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uniqueObjectArrayByAttr = exports.ObjectAttrFromNotationString = exports.shuffleArray = exports.groupArrOfObjByKey = exports.groupByKeys = exports.mapObjUtil = exports.groupObjArrayByAttr = exports.sortByAttribute = void 0;
// sort by one attribute
// console.log(sortByAttribute(array, 'name'));
// // sort by mupltiple attributes
// console.log(sortByAttribute(array, '-rating', 'name'));
/**
 * sort by one attribute: console.log(sortByAttribute(array, 'name'));

  * sort by mupltiple attributes asc or desc: console.log(sortByAttribute(array, '-rating', 'name'));
 * @param array
 * @param attrs
 * @returns
 */
const sortByAttribute = (array, ...attrs) => {
    // generate an array of predicate-objects contains
    // property getter, and descending indicator
    let predicates = attrs.map((pred) => {
        let descending = pred.charAt(0) === '-' ? -1 : 1;
        pred = pred.replace(/^-/, '');
        return {
            getter: (o) => o[pred],
            descend: descending
        };
    });
    // schwartzian transform idiom implementation. aka: "decorate-sort-undecorate"
    return array.map(item => {
        return {
            src: item,
            compareValues: predicates.map((predicate) => predicate.getter(item))
        };
    })
        .sort((o1, o2) => {
        let i = -1, result = 0;
        while (++i < predicates.length) {
            if (o1.compareValues[i] < o2.compareValues[i])
                result = -1;
            if (o1.compareValues[i] > o2.compareValues[i])
                result = 1;
            if (result *= predicates[i].descend)
                break;
        }
        return result;
    })
        .map(item => item.src);
};
exports.sortByAttribute = sortByAttribute;
const groupObjArrayByAttr = (array, attr, k) => {
    return array
        .sort((a, b) => a.y - b.y)
        .reduce((r, a) => {
        const y = k ? a[attr][k] : a[attr];
        r[y] = r[y] || [];
        r[y].push(a);
        return r;
    }, Object.create(null));
};
exports.groupObjArrayByAttr = groupObjArrayByAttr;
const mapObjUtil = (func, obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, func(value)]));
exports.mapObjUtil = mapObjUtil;
/**
  * Groups an array of objects with multiple properties.
  *
  * @param  {Array}  array: the array of objects to group
  * @param  {Array|String} props: the properties to groupby
  * @return {Array} an array of arrays with the grouped results
  */
const groupByKeys = (array, props, propsConcString = ' - ') => {
    if (!Array.isArray(props))
        props = [props];
    const getGroupedItems = (item) => {
        const returnArray = [];
        let i;
        for (i = 0; i < props.length; i++) {
            const objPropAvail = item[props[i]];
            if (objPropAvail)
                returnArray.push(objPropAvail);
        }
        return returnArray;
    };
    let groups = {};
    let i;
    for (i = 0; i < array.length; i++) {
        const arrayRecord = array[i];
        const group = getGroupedItems(arrayRecord).join(propsConcString);
        // console.log(group);
        groups[group] = groups[group] || [];
        groups[group].push(arrayRecord);
    }
    return groups;
    // return Object.keys(groups).map((group) => {
    //   // console.log(groups, group, groups[group]);
    //     return groups[group];
    // });
};
exports.groupByKeys = groupByKeys;
// export const groupArrOfObjByKey = (objArr: any[], key: string): any[]=>{
//   return objArr
//     .map(arrObj => [arrObj[key], arrObj])
//     .reduce(
//       (groups, [key, value]) => Object.assign(groups, { [key]: (groups[key] || []).concat([value]) })
//     )
// }
// Utils
const mapObj = (f, obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, f(v)]));
const groupArrOfObjByKey = (arrOfObj, key) => arrOfObj
    .map(x => [x[key], x])
    .reduce((groups, [k, v]) => Object.assign(groups, { [k]: (groups[k] || []).concat([v]) }), {});
exports.groupArrOfObjByKey = groupArrOfObjByKey;
// const AllKey = Symbol();
// export const groupByKeys = ([k, ...ks], xs) => k
//   ? Object.assign(mapObj(
//       ys => groupByKeys(ks as any, ys),
//       groupArrOfObjByKey(xs, k)
//     ), {})
//   : xs;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffleArray = shuffleArray;
const ObjectAttrFromNotationString = (obj, attr) => {
    const attrs = attr === null || attr === void 0 ? void 0 : attr.split('.');
    const objAttrs = [];
    for (let i = 0; i < attrs.length; i++) {
        objAttrs.push([attrs[i]]);
    }
    // console.log(objobjAttrs, );
};
exports.ObjectAttrFromNotationString = ObjectAttrFromNotationString;
const uniqueObjectArrayByAttr = (array, attr) => {
    const map = new Map();
    for (let src of array) {
        map.set(src[attr], src);
    }
    return [...map.values()];
};
exports.uniqueObjectArrayByAttr = uniqueObjectArrayByAttr;


/***/ }),

/***/ "../../libs/lib-x/src/lib/util-fns/date.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getZonedEndOfYear = exports.getZonedStartOfYear = exports.getZonedEndOfMonth = exports.getZonedStartOfMonth = exports.getZonedEndOfWeek = exports.getZonedStartOfWeek = exports.getZonedEndOfDay = exports.getZonedStartOfDay = void 0;
const date_fns_1 = __webpack_require__("date-fns");
const date_fns_tz_1 = __webpack_require__("date-fns-tz");
const calcZonedDate = (date, tz, fn, options = null) => {
    const inputZoned = (0, date_fns_tz_1.utcToZonedTime)(date, tz);
    const fnZoned = (options) ? fn(inputZoned, options) : fn(inputZoned);
    return (0, date_fns_tz_1.zonedTimeToUtc)(fnZoned, tz);
};
const getZonedStartOfDay = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.startOfDay);
};
exports.getZonedStartOfDay = getZonedStartOfDay;
const getZonedEndOfDay = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.endOfDay);
};
exports.getZonedEndOfDay = getZonedEndOfDay;
const getZonedStartOfWeek = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.startOfWeek, { weekStartsOn: 1 });
};
exports.getZonedStartOfWeek = getZonedStartOfWeek;
const getZonedEndOfWeek = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.endOfWeek, { weekStartsOn: 1 });
};
exports.getZonedEndOfWeek = getZonedEndOfWeek;
const getZonedStartOfMonth = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.startOfMonth);
};
exports.getZonedStartOfMonth = getZonedStartOfMonth;
const getZonedEndOfMonth = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.endOfMonth);
};
exports.getZonedEndOfMonth = getZonedEndOfMonth;
const getZonedStartOfYear = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.startOfYear);
};
exports.getZonedStartOfYear = getZonedStartOfYear;
const getZonedEndOfYear = (date, timeZone = 'Africa/Lagos') => {
    return calcZonedDate(date, timeZone, date_fns_1.endOfYear);
};
exports.getZonedEndOfYear = getZonedEndOfYear;
// Example Usage
let endOfDayZoned = (0, exports.getZonedEndOfDay)(new Date(), 'Africa/Lagos');


/***/ }),

/***/ "../../libs/lib-x/src/lib/util-fns/math.util.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.waitHereFor = exports.randomChars = exports.padNumber = exports.roundNumber = exports.formatToNumber = exports.isNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const nanoid = tslib_1.__importStar(__webpack_require__("nanoid"));
const isNumber = (value) => {
    const isRegularNumber = ((typeof value === 'number' || value instanceof Number ||
        (value && typeof value === 'string' && !isNaN(value))) &&
        isFinite(value));
    const localeNoRegExp = /\b(\d+[\.,]?\d+)+\b/gi;
    const isLocaleNumber = ((typeof value === 'string' || typeof value === 'number') &&
        !isNaN(parseFloat(value)) &&
        !value.toString().includes('/') &&
        localeNoRegExp.test(value));
    return isRegularNumber || isLocaleNumber;
};
exports.isNumber = isNumber;
function formatToNumber(val) {
    // val = roundNumber(val, 2);
    if (!val)
        return '';
    if (!(0, exports.isNumber)(val))
        return val === null || val === void 0 ? void 0 : val.toString();
    let num = val.toString().includes('.')
        ? val.toString().split('.')[0]
        : val.toString();
    while (/(\d+)(\d{3})/.test(num.toString())) {
        // insert comma to 4th last position to the match number
        num = num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    // return the number with decimal point if it exists
    const ans = val.toString().includes('.')
        ? num + '.' + val.toString().split('.')[1]
        : num;
    return ans;
}
exports.formatToNumber = formatToNumber;
function roundNumber(num, dec) {
    let str = Math.round(parseFloat(num) * Math.pow(10, dec)).toString();
    if (dec == 0) {
        // eslint-disable-next-line no-self-assign
        str = str;
    }
    else {
        while (str.length <= dec) {
            str = '0' + str;
        }
    }
    const decpoint = str.length - dec;
    if (dec == 0)
        return str.substring(0, decpoint) + str.substring(decpoint, str.length);
    else
        return (str.substring(0, decpoint) + '.' + str.substring(decpoint, str.length));
}
exports.roundNumber = roundNumber;
const padNumber = (numberToPad, howManyTimesToPad, paddingString) => {
    return (Array(howManyTimesToPad - String(numberToPad).length + 1).join(paddingString || '0') + numberToPad);
};
exports.padNumber = padNumber;
/**
 *
 * @param type type of the gerated characters
 * @param length the length of the gerated charaters
 */
const randomChars = (type, length) => {
    if (type == 'mixed') {
        const nanoId = nanoid.customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        return nanoId(length);
    }
    else if (type == 'letters') {
        const nanoId = nanoid.customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        return nanoId(length);
    }
    else {
        const nanoId = nanoid.customAlphabet('123456789');
        return nanoId(length);
    }
};
exports.randomChars = randomChars;
const waitHereFor = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};
exports.waitHereFor = waitHereFor;


/***/ }),

/***/ "../../libs/lib-x/src/lib/util-fns/node-printer.util.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.printTest = void 0;
// import * as escpos from 'escpos';
// escpos.USB = require('escpos-usb');
const printTest = () => {
    // const device = new USB();
    // device.open(async function(err){
    //   if(err){
    //     // handle error
    //     return
    //   }
    //   // encoding is optional
    //   const options = { encoding: "GB18030" /* default */ }
    //   let printer = new Printer(device, options);
    //   // Path to png image
    //   // const filePath = join("/PATH/TO/IMAGE");
    //   // const image = await Image.load(filePath);
    //   printer
    //     .font("a")
    //     .align("ct")
    //     .style("bu")
    //     .size(1, 1)
    //     .text("May the gold fill your pocket")
    //     .text("恭喜发财")
    //     .barcode(112233445566, "EAN13", { width: 50, height: 50 })
    //     .table(["One", "Two", "Three"])
    //     .tableCustom(
    //       [
    //         { text: "Left", align: "LEFT", width: 0.33, style: "B" },
    //         { text: "Center", align: "CENTER", width: 0.33 },
    //         { text: "Right", align: "RIGHT", width: 0.33 },
    //       ],
    //       { encoding: "cp857", size: [1, 1] }, // Optional
    //     )
    //   // inject qrimage to printer
    //   printer = await printer.qrimage("https://github.com/node-escpos/driver")
    //   // inject image to printer
    //   // printer = await printer.image(
    //   //   image,
    //   //   "s8" // changing with image
    //   // )
    //   printer
    //     .cut()
    //     .close()
    // });
};
exports.printTest = printTest;


/***/ }),

/***/ "@golevelup/nestjs-modules":
/***/ ((module) => {

module.exports = require("@golevelup/nestjs-modules");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/schedule":
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@node-escpos/core":
/***/ ((module) => {

// module.exports = require("@node-escpos/core");

/***/ }),

/***/ "@node-escpos/usb-adapter":
/***/ ((module) => {

// module.exports = require("@node-escpos/usb-adapter");

/***/ }),

/***/ "@vscode/sudo-prompt":
/***/ ((module) => {

module.exports = require("@vscode/sudo-prompt");

/***/ }),

/***/ "cron":
/***/ ((module) => {

module.exports = require("cron");

/***/ }),

/***/ "crypto-js":
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "date-fns":
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns-tz":
/***/ ((module) => {

module.exports = require("date-fns-tz");

/***/ }),

/***/ "electron":
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "electron-log":
/***/ ((module) => {

module.exports = require("electron-log");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs-extra":
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ "helmet":
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-delete":
/***/ ((module) => {

module.exports = require("mongoose-delete");

/***/ }),

/***/ "multer":
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "nanoid":
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ "nestjs-cls":
/***/ ((module) => {

module.exports = require("nestjs-cls");

/***/ }),

/***/ "node-turn":
/***/ ((module) => {

module.exports = require("node-turn");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "child_process":
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "os":
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const lib_serverConfig_1 = __webpack_require__("../../libs/lib-server-config/src/index.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (yield new lib_serverConfig_1.AppServer(app_module_1.AppModule).startNestApp())
            .enableExpress()
            .enableHelmet({ contentSecurityPolicy: false })
            .enableGlobals()
            // .cluster()
            .startServer();
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map