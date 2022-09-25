namespace exceptionPractice {
  try {
    console.log('b');
    throwError();
    console.log("aaa");
  } catch (err) {
    console.log('catched error');
    console.log(err);
  }
  console.log('end');

  function throwError() {
    const error = new Error("has raised error");
    throw error;
  }
}
