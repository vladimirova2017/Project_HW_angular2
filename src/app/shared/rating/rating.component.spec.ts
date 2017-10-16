import { RatingComponent } from "./rating.component";
import createSpy = jasmine.createSpy;

describe('Rating component', () => {
  let sut: any;

  beforeEach(() => {
    sut = new RatingComponent();
  });
  it('should  functions  to be defined', () => {
    expect(sut.onClick).toBeDefined();
    expect(sut.ngOnInit).toBeDefined();
  });

  describe('#onClick', () => {

    beforeEach(() => {
      sut.itemId = 0;
      sut.ratingClick = {
        emit: jasmine.createSpy('emit')
      };
      sut.onClick(3);
    });

    it('should set itemId', () => {
      expect(sut.rating).toBe(3);
    });

    it('should call ratingClick', () => {
      expect(sut.ratingClick.emit).toHaveBeenCalledWith({itemId: 0, rating: 3});
    });
  })
})
