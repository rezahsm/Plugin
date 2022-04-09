var baseInputs = [
  {
    label: "Base matrix",
    name: "matrix",
    type: "text",
    required: true,
  },
  {
    label: "Hieght",
    name: "hieght",
    type: "text",
    required: true,
  },
  {
    label: "Start point",
    name: "zero",
    type: "position",
    required: true,
  },
  {
    label: "Block Type",
    name: "blockType",
    type: "blockType",
    required: true,
  },
];

function make2DMatrix(flattenMatrix){
  flattenMatrix = falttenMatrix.replaceAll(' ','');
  var matrix2D = flattenMatrix.split(',');
  return matrix2D;
}

function makeMaze(matrix,hieght,zero,blockType){
  var matrix2D = make2DMatrix(matrix);
  for(let y = zero.y;y<zero.y+hieght;y++)
    for(let x = zero.x;x<zero.x+matrix2D.length;x++)
      for(let z = zero.z;z<zero.z+matrix2D[x - zero.x].length;z++)
        await rxjs.firstValueFrom(UtopiaApi.placeBlock(blockType, x, y, z));
}

async function main() {
  console.log("Running Cube Builder");

  var Inputs = await rxjs.firstValueFrom(
    UtopiaApi.getInputsFromUser({ inputs: baseInputs })
  );
  
  makeMaze(Inputs.matrix,Inputs.hieght,Inputs.zero,Input.blockType)

}


