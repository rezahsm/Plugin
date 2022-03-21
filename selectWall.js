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
    console.log(_.isEqual(blockPosition,blockPosition));
}
var selectedBlock = []
function isBlockSelected(blockPos){
    for(let i=0;i<selectBlock.length;i++)
        if(_.isEqual(selectBlock[i], blockPos))
            return true;
    return false;
}
function selectBlock(blockX,blockY,blockZ){
    
}
function selectWall(blockX,blockY,blockZ){
    
}
