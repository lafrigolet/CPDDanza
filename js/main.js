function formInputsToJSON(forminputs) {
  var formjson = {};

  forminputs.each((index, forminput) =>  {
    console.log(forminput.name);
    if (forminput.name) {
      formjson[forminput.name] = {};
      formjson[forminput.name].type = forminput.type;
      formjson[forminput.name].value = forminput.value;
      formjson[forminput.name].validate = forminput.validate;
    }
  });
              
  return formjson;

}
