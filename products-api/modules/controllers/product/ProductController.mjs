import service from '../../services/product/ProductService.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';

class ProductController {
  async list(req, res) {
    const products = await service.list();

    return res.status(HttpStatus.OK).json(products);
  }

  async getProduct(req, res) {
    const { id } = req.params;

    const product = await service.getOneProduct(id);

    return res.status(HttpStatus.OK).json(product);
  }

  async create(req, res) {
    const { name, ean, supplier_id } = req.body;

    const product = await service.create(name, ean, supplier_id);

    return res.status(HttpStatus.CREATED).json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, ean } = req.body;

    const product = await service.update(id, name, ean);

    return res.status(HttpStatus.CREATED).json(product);
  }

  async updateSupplier(req, res) {
    const { id } = req.params;
    const { supplier_id } = req.body;

    const product = await service.updateSupplier(id, supplier_id);

    return res.status(HttpStatus.CREATED).json(product);
  }

  async delete(req, res) {
    const { id } = req.params;

    await service.delete(id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

export default new ProductController();
