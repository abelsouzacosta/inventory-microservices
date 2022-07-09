import repository from '../../repositories/ProductRepository.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';

class EanAlreadyTaken {
  async execute(req, res, next) {
    const { id } = req.params;
    const { ean } = req.body;

    const product = await repository.findById(id);
    const eanExists = await repository.findByEan(ean);

    if (product.id !== eanExists.id)
      throw new ApplicationError(
        `Ean ${ean} already belongs to another instance of product with id ${eanExists.id}`,
        HttpStatus.CONFLICT,
      );

    return next();
  }
}

export default new EanAlreadyTaken();
