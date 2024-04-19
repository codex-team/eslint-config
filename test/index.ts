import type Test from './interface';

/**
 * Class description doc
 */
class User {
  public author: User = null;
  public list: Array<User>;
  public list2: User[];
  private test: Test;

  /**
   * @typescript-eslint/explicit-member-accessibility option overrides constructors no-public
   */
  constructor() {
    this.author = null;
  }

  /**
   * Public method should be placed abode the private and below the constructor
   *
   * @param adad - ads
   */
  public hello(): void {
    console.log('hello');
  }

  /**
   * Method without access modifier
   */
  public mutate(): void {
    /**
     * newline-per-chained-call
     */
    Promise.resolve()
      .then()
      .then();
  }

  /**
   * TSDoc
   */
  public undocumentedMethod(): void {
    console.log('undocumentedMethod');
  }

  /**
   * @param eventId
   * @returns
   */
  async getEventLastRepetition(eventId) {
    return 'aa';
  }


  /**
   * Private method should be placed below the public
   *
   * @param aa
   */
  private mute(aa): { a: number; b: string } {
    /**
     * object-property-newline
     * comma-dangle
     */
    const obj = {
      a: 1,
      b: 'op',
    };

    /**
     * curly
     */
    if (obj.a === 1) {
      return;
    }

    /**
     *
     */
    obj.b = `adad ${obj.a}`;

    return obj;
  }

  /**
   *
   * @param value
   */
  strictNullCheck(value: null | string | boolean) {
    if (!value) {
      return true;
    }

    return false;
  }
}
