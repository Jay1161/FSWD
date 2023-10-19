const getvar = (var_name) => {
  const Var_Value = process.env[var_name];

  if (Var_Value === undefined) {
    return 3000;
  } else {
    return Var_Value;
  }
};

const main = async () => {
  const var_name = 'PORT';
  const Var_Value = await getvar(var_name);

  console.log(`The value of the environment variable "${var_name}" is "${Var_Value}"`);
};

main();