import { SearchButtonComponent } from "./search-button.component";

describe('Search Button component', () => {
  let sut: any;
  let formMock: any;

  beforeEach(() => {
    sut = new SearchButtonComponent();
    sut.eventSearch = {
      emit: jasmine.createSpy('emit')
    };
    formMock = {value: {title: 'test'}};
  });

  it('should  function  to be defined', () => {
    expect(sut.onSearch).toBeDefined();
  });


  it('should call search.emit with param', () => {
    sut.onSearch(formMock);
    expect(sut.eventSearch.emit).toHaveBeenCalledWith('test');
  });

});
