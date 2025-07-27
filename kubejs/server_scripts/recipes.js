ServerEvents.recipes(e => {
    e.shapeless('patchouli:guide_book[patchouli:book="advancedperipherals:manual"]', ['minecraft:book', 'computercraft:computer_normal']).id('geersandqueers:book_adv_per')
    e.shapeless('minecraft:chest', ['#c:chests']).id('geersandqueers:chests_alt')
    e.shaped('nomansland:shelf_mushroom_block', [
        'AA',
        'AA'
    ], {
        A: 'nomansland:shelf_mushroom'
    }).id('geersandqueers:shelf_mushroom_block')
})
