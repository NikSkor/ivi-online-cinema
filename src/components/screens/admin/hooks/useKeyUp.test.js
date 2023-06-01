import { fireEvent, renderHook } from '@testing-library/react';
// import { renderHook } from '@testing-library/react';
import useKeydown from './useKeyUp';


describe('useKeyUp', () => {
  test('should handle keyup event', () => {
    const callback = jest.fn();
    const event = new KeyboardEvent('keyup', {
      keyCode: '27',
    });

    const view = renderHook(() => useKeydown([27], callback));

    expect(callback).toHaveBeenCalledTimes(0);
    fireEvent(document, event);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.spyOn(document, 'removeEventListener');

    view.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);

    fireEvent(document, event);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('shouldn`t handle unnecessary keyup event', () => {
    const callback = jest.fn();
    const event = new KeyboardEvent('keyup', {
      keyCode: '13',
    });

    renderHook(() => useKeydown([27], callback));

    expect(callback).toHaveBeenCalledTimes(0);
    fireEvent(document, event);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
