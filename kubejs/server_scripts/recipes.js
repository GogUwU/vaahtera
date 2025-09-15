ServerEvents.recipes(e => {
    e.remove({ id: 'everycomp:fd/cutting/ars_nouveau/archwood_log' })
    e.remove({ id: 'everycomp:fd/cutting/ars_nouveau/archwood_wood' })

    e.shapeless('patchouli:guide_book[patchouli:book="advancedperipherals:manual"]', ['minecraft:book', 'computercraft:computer_normal']).id('geersandqueers:book_adv_per')
    e.shapeless('minecraft:chest', ['#c:chests']).id('geersandqueers:chests_alt')
    e.shaped('nomansland:shelf_mushroom_block', [
        'AA',
        'AA'
    ], {
        A: 'nomansland:shelf_mushroom'
    }).id('geersandqueers:shelf_mushroom_block')




    //simple radio stuff
    e.shaped('4x simpleradio:copper_wire', [
        ' A ',
        'A A',
        ' A '
    ], {
        A: '#c:ingots/copper'
    }).id('geersandqueers:copper_wire')

    e.shaped('simpleradio:spuddie_talkie', [
        ' i ',
        ' p ',
        ' w '
    ], {
        i: '#c:ingots/iron',
        p: 'minecraft:potato',
        w: 'simpleradio:copper_wire'
    }).id('geersandqueers:spuddie_talkie')

    e.shaped('simpleradio:antenna', [
        ' i ',
        ' i ',
        ' b '
    ], {
        b: '#c:ingots/iron',
        i: 'minecraft:iron_bars'
    }).id('geersandqueers:antenna')

    e.shaped('simpleradio:transmitting_module', [
        ' a ',
        'wiw',
        ' e '
    ], {
        i: '#c:ingots/iron',
        a: 'simpleradio:antenna',
        w: 'simpleradio:copper_wire',
        e: '#c:ender_pearls'
    }).id('geersandqueers:transmitting_module')

    e.shaped('simpleradio:receiving_module', [
        ' a ',
        'wiw',
        ' e '
    ], {
        i: '#c:ingots/iron',
        a: 'simpleradio:antenna',
        w: 'simpleradio:copper_wire',
        e: '#c:gems/amethyst'
    }).id('geersandqueers:receiving_module')

    e.shaped('simpleradio:listener_module', [
        ' w ',
        ' i ',
        ' c '
    ], {
        i: '#c:ingots/iron',
        c: 'simpleradio:copper_wire',
        w: '#minecraft:wool'
    }).id('geersandqueers:listener_module')

    e.shaped('simpleradio:speaker_module', [
        ' w ',
        ' i ',
        ' c '
    ], {
        i: '#c:ingots/iron',
        c: 'simpleradio:copper_wire',
        w: 'supplementaries:speaker_block'
    }).id('geersandqueers:speaker_module')

    e.shaped('simpleradio:radiosmither', [
        ' w ',
        'iai',
        'bbb'
    ], {
        i: '#c:ingots/iron',
        b: 'minecraft:polished_deepslate',
        w: 'simpleradio:copper_wire',
        a: 'minecraft:amethyst_shard'
    }).id('geersandqueers:radiosmither')

    e.shaped('simpleradio:microphone', [
        ' w ',
        'rac',
        ' i '
    ], {
        i: '#c:ingots/iron',
        r: 'minecraft:redstone',
        w: '#minecraft:wool',
        a: 'simpleradio:listener_module',
        c: 'simpleradio:copper_wire'
    }).id('simpleradio:speaker')

    e.shaped('simpleradio:speaker', [
        ' s ',
        'ici',
        'ri '
    ], {
        i: '#c:ingots/iron',
        r: 'minecraft:redstone',
        s: 'simpleradio:speaker_module',
        c: 'simpleradio:copper_wire'
    }).id('geersandqueers:speaker')

    e.shaped('simpleradio:insulator', [
        '   ',
        'pip',
        '   '
    ], {
        i: '#c:ingots/iron',
        p: '#minecraft:planks',
    }).id('geersandqueers:insulator')

    e.shaped('simpleradio:radio', [
        ' ra',
        'Riw',
        ' s '
    ], {
        i: '#c:ingots/iron',
        R: '#c:dusts/redstone',
        r: 'simpleradio:receiving_module',
        w: 'simpleradio:copper_wire',
        a: 'simpleradio:antenna',
        s: 'simpleradio:listener_module'
    }).id('geersandqueers:radio')

    e.shaped('simpleradio:receiver', [
        ' A ',
        'qir',
        ' w '
    ], {
        i: 'minecraft:iron_block',
        A: 'simpleradio:antenna',
        q: 'minecraft:quartz',
        r: 'simpleradio:receiving_module',
        w: 'simpleradio:copper_wire'
    }).id('geersandqueers:receiver')

    e.shaped('simpleradio:transmitter', [
        ' A ',
        'qir',
        ' w '
    ], {
        i: 'minecraft:iron_block',
        A: 'simpleradio:antenna',
        q: 'minecraft:quartz',
        r: 'simpleradio:transmitting_module',
        w: 'simpleradio:copper_wire'
    }).id('geersandqueers:transmitter')

    e.shaped('simpleradio:transceiver', [
        'alw',
        'tir',
        'AsA'
    ], {
        i: '#c:ingots/iron',
        a: 'simpleradio:antenna',
        l: 'simpleradio:listener_module',
        w: 'simpleradio:copper_wire',
        t: 'simpleradio:transmitting_module',
        r: 'simpleradio:receiving_module',
        A: '#c:gems/amethyst',
        s: 'simpleradio:speaker_module'
    }).id('geersandqueers:transceiver')
})
