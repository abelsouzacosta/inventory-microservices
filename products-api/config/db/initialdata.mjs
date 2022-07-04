import { Product, Category, Supplier } from '../../modules/models/index.mjs';

export default async function createInitialData() {
  await Supplier.sync({ force: true });
  await Product.sync({ force: true });
  await Category.sync({ force: true });

  await Supplier.create({
    name: 'fornecedor',
    phone: '90909090',
  });

  await Category.create({
    name: 'categoria teste',
  });

  await Product.create({
    name: 'teste',
    ean: '878756565',
    supplier_id: 1,
  });
}
