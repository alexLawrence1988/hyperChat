
swal("What do you want to be called?", {
  content: "input",
})
  .then((value) => {
    swal(`Welcome ${value}`);
  });
