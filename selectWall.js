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
    var blockPosition = [blockX,blockY,blockZ]; 
}
var block = []
var selectedBlock = []
function isBlockSelected(blockPos){
    for(let i=0;i<selectBlock.length;i++)
        if(JSON.stringify(selectBlock[i]) === JSON.stringify(blockPos))
            return true;
    return false;
}
function selectBlock(blockPos){
    
}
function selectWall(blockPos){
    
}