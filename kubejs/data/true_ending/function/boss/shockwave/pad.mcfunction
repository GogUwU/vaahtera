particle effect ~ ~-2 ~ 2 2 2 1 12 force @a[distance=..32]
execute positioned ~ ~-2 ~ run effect give @a[distance=..5] levitation 17 2
execute positioned ~ ~-2 ~ run effect give @a[distance=..5] slow_falling 27 0
execute unless entity @e[distance=..256,type=ender_dragon] run kill @s
