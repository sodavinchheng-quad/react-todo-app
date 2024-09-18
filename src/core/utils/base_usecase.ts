class BaseUsecase<I = undefined, O = void> {
  async execute(input: I): Promise<O> {
    throw new Error("Method not implemented.");
  }
}

export default BaseUsecase;
