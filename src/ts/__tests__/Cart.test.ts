import Cart from '../service/Cart';
import Movie from '../domain/Movie'

describe('Cart Class', () => {
  let cart: Cart;

  beforeEach(() => {
      cart = new Cart();
  });

  test('should add Movie instances to Cart', () => {
      const movie = new Movie(
          1,
          'Название Фильма',
          'Original Movie Title',
          2023,
          'Россия',
          'Лучший фильм года!',
          'Драма',
          120,
          500
      );
      
      cart.add(movie);

      expect(cart.items[0]).toBe(movie);
  });
});