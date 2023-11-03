import { DemoPipe } from './demo.pipe';

describe('DemoPipe', () => {
  let pipe: DemoPipe;
  beforeEach(()=>{
     pipe = new DemoPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should display weak if 5 value is passed', () => {
   expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if 10 value is passed', () => {
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display strongest if 20 value is passed', () => {
    expect(pipe.transform(20)).toEqual('20 (strongest)');
  });
});
