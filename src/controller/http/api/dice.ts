import { EmptyObject, IRequest, IResponse } from '../../../@types/express/interface';
import { IPlayRequest, IPlayResponse } from '../../../schema/play';

export class DiceController {
  entry: (
    req: IRequest<EmptyObject, IPlayRequest>,
    res: IResponse<IPlayResponse>,
  ) => Promise<IResponse<IPlayResponse>> = async (req, res) => {
    const { amount } = req.body;
    console.log('amount', amount);

    const result = {
      data: { isWin: false },
    };

    return res.send(result);
  }
}
export const diceController = new DiceController();
