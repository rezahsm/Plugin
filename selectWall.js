var baseInputs = [
    {
      label: "Block pos",
      name: "blockPos",
      type: "position",
      required: true,
    }
];

async function main() {
    console.log("Running Cube Builder");
  
    var Inputs = await rxjs.firstValueFrom(
      UtopiaApi.getInputsFromUser({ inputs: baseInputs })
    );
    var blockX = Inputs.blockPos.x;
    var blockY = Inputs.blockPos.y;
    var blockZ = Inputs.blockPos.z;
    console.log(blockZ);
    console.log(blockY);
    console.log(blockZ);
}
