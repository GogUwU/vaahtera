ServerEvents.recipes(e => {
    //e.remove({id:''})
    //removed recipes
    e.remove({id:'pipeorgans:crafting/base'})
    e.remove({id:'pipeorgans:crafting/piccolo'})
    e.remove({id:'pipeorgans:crafting/diapason'})
    e.remove({id:'pipeorgans:crafting/gamba'})
    e.remove({id:'pipeorgans:crafting/gedeckt'})
    e.remove({id:'pipeorgans:crafting/nasard'})
    e.remove({id:'pipeorgans:crafting/posaune'})
    e.remove({id:'pipeorgans:crafting/subbass'})
    e.remove({id:'pipeorgans:crafting/trompette'})
    e.remove({id:'pipeorgans:crafting/vox_humana'})
    //readd these recipes without 'pipeorgans:crafting/base'
    e.shaped('pipeorgans:piccolo', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'minecraft:iron_ingot', 
          e: 'minecraft:cherry_log',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:piccolo')

    e.shaped('pipeorgans:diapason', [ 
        ' a ',
        ' a ',
        ' r '
        ], {
          a: 'create:zinc_ingot',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:diapason')
    
    e.shaped('pipeorgans:trompette', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'create:brass_sheet', 
          e: 'pipeorgans:brass_boot',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:trompette')
    
    e.shaped('pipeorgans:gedeckt', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'minecraft:spruce_planks', 
          e: 'minecraft:spruce_slab',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:gedeckt')
    
    e.shaped('pipeorgans:gamba', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'minecraft:iron_ingot', 
          e: '#c:plates/iron',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:gamba')
    
    e.shaped('pipeorgans:nasard', [ 
        ' a ',
        ' a ',
        ' r '
        ], {
          a: '#c:plates/copper', 
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:nasard')
    
    e.shaped('pipeorgans:subbass', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'minecraft:dark_oak_planks', 
          e: 'minecraft:dark_oak_slab',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:subbass')
    
    e.shaped('pipeorgans:posaune', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'create:brass_sheet', 
          e: 'pipeorgans:dark_oak_boot',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:posaune')
    
    e.shaped('pipeorgans:vox_humana', [ 
        ' a ',
        ' e ',
        ' r '
        ], {
          a: 'create:brass_sheet', 
          e: 'pipeorgans:copper_boot',
          r: 'minecraft:copper_ingot', 
      }).id('gearsandqueers:vox_humana')
    //points and stuff
    // ['minecraft:dark_oak_log','nomansland:pine_log','hexerei:witch_hazel_log','minecraft:jungle_log','minecraft:birch_log','minecraft:spruce_log','nomansland:maple_log','minecraft:oak_log','minecraft:cherry_log']
    // full list of logs needed i wasn't able to make this workd :(
    //e.recipes.create.compacting(['kubejs:wood_package'], ['minecraft:dark_oak_log','nomansland:pine_log']).id('gearsandqueers:wood_package')
})
