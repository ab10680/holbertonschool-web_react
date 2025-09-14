namespace Subjects {
  export class Subject {
    // Definite assignment assertion to satisfy strict mode
    public teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
