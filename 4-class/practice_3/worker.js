import Person from './person';

export default class Worker extends Person {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
