import { Request, Response, NextFunction } from 'express';
export declare class Concession {
    _model: any;
    constructor(norm: any);
    getAllSnacks(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSnackById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createSnack(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateSnack(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteSnack(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
