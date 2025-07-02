ServerEvents.recipes(e => {
    //e.remove({id:''})
    //removed recipes
    //readd these recipes without 'pipeorgans:crafting/base'
//     e.remove({id:'pipeorgans:crafting/base'})
//     e.remove({id:'pipeorgans:crafting/piccolo'})
//     e.remove({id:'pipeorgans:crafting/diapason'})
//     e.remove({id:'pipeorgans:crafting/gamba'})
//     e.remove({id:'pipeorgans:crafting/gedeckt'})
//     e.remove({id:'pipeorgans:crafting/nasard'})
//     e.remove({id:'pipeorgans:crafting/posaune'})
//     e.remove({id:'pipeorgans:crafting/subbass'})
//     e.remove({id:'pipeorgans:crafting/trompette'})
//     e.remove({id:'pipeorgans:crafting/vox_humana'})
//
//     e.shaped('pipeorgans:piccolo', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'minecraft:iron_ingot',
//           e: 'minecraft:cherry_log',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:piccolo')
//
//     e.shaped('pipeorgans:diapason', [
//         ' a ',
//         ' a ',
//         ' r '
//         ], {
//           a: 'create:zinc_ingot',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:diapason')
//
//     e.shaped('pipeorgans:trompette', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'create:brass_sheet',
//           e: 'pipeorgans:brass_boot',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:trompette')
//
//     e.shaped('pipeorgans:gedeckt', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'minecraft:spruce_planks',
//           e: 'minecraft:spruce_slab',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:gedeckt')
//
//     e.shaped('pipeorgans:gamba', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'minecraft:iron_ingot',
//           e: '#c:plates/iron',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:gamba')
//
//     e.shaped('pipeorgans:nasard', [
//         ' a ',
//         ' a ',
//         ' r '
//         ], {
//           a: '#c:plates/copper',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:nasard')
//
//     e.shaped('pipeorgans:subbass', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'minecraft:dark_oak_planks',
//           e: 'minecraft:dark_oak_slab',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:subbass')
//
//     e.shaped('pipeorgans:posaune', [
//         ' a ',
//         ' e ',
//         ' r '
//         ], {
//           a: 'create:brass_sheet',
//           e: 'pipeorgans:dark_oak_boot',
//           r: 'minecraft:copper_ingot',
//       }).id('gearsandqueers:posaune')


//      a way of compessing points
        e.shaped('kubejs:compressed_border_point', [
            'aaa',
            'aaa',
            'aaa'
            ], {
            a: 'kubejs:border_point',
        }).id('gearsandqueers:9_compressed_border_point')

        e.shaped('kubejs:super_compressed_border_point', [
            'aaa',
            'aaa',
            'aaa'
        ], {
            a: 'kubejs:compressed_border_point',
        }).id('gearsandqueers:9_super_compressed_border_point')

        e.shaped('kubejs:border_point_singularity', [
            'aaa',
            'aaa',
            'aaa'
        ], {
            a: 'kubejs:super_compressed_border_point',
        }).id('gearsandqueers:9_border_point_singularity')

//      un compressing points
        e.shapeless('9x kubejs:super_compressed_border_point', ['kubejs:border_point_singularity']).id('gearsandqueers:un_comp_border_point_singularity')
        e.shapeless('9x kubejs:compressed_border_point', ['kubejs:super_compressed_border_point']).id('gearsandqueers:un_comp_super_compressed_border_point')
        e.shapeless('9x kubejs:border_point', ['kubejs:compressed_border_point']).id('gearsandqueers:un_comp_compressed_border_point')

//      :D
        e.shapeless('64x minecraft:cod', ['minecraft:bedrock']).id('gearsandqueers:fish')
})
