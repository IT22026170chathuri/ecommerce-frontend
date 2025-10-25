import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Product } from '../types';
import { mockProducts as initialProducts } from '../data/products';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Admin = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<Product>();

  const onSubmit = (data: Product) => {
    if (editingId) {
      setProducts(prev => prev.map(p => p.id === editingId ? { ...data, id: editingId } : p));
      setEditingId(null);
    } else {
      const newProduct = { ...data, id: Date.now() };
      setProducts(prev => [...prev, newProduct]);
    }
    reset();
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    Object.keys(product).forEach(key => {
      setValue(key as keyof Product, product[key as keyof Product]);
    });
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin - Product Management</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '2rem' }}>
        <Input
          label="Product Name"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
        />
        <Input
          label="Price"
          type="number"
          step="0.01"
          {...register('price', { required: 'Price is required', min: 0 })}
          error={errors.price?.message}
        />
        <Input
          label="Description"
          {...register('description', { required: 'Description is required' })}
          error={errors.description?.message}
        />
        <Input
          label="Image URL"
          {...register('image')}
        />
        <Input
          label="Category"
          {...register('category', { required: 'Category is required' })}
          error={errors.category?.message}
        />
        <Input
          label="Stock"
          type="number"
          {...register('stock', { required: 'Stock is required', min: 0 })}
          error={errors.stock?.message}
        />
        <Button type="submit">{editingId ? 'Update' : 'Add'} Product</Button>
        {editingId && <Button type="button" variant="secondary" onClick={() => { setEditingId(null); reset(); }}>Cancel</Button>}
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Button onClick={() => handleEdit(product)} variant="secondary">Edit</Button>
                <Button onClick={() => handleDelete(product.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;