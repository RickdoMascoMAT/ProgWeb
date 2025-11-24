export interface Skyblock {
    success: boolean
    lastUpdated: number
    items: Item[]
}

export interface Item {
    material: string
    durability: any
    skin?: Skin
    name: string
    category?: string
    tier?: string
    npc_sell_price?: number
    id: string
    salvages?: Salvage[]
    rarity_salvageable?: boolean
    description?: string
    item_model?: string
    stats?: Stats
    unstackable?: boolean
    dungeon_item_conversion_cost?: DungeonItemConversionCost
    upgrade_costs?: UpgradeCost[][]
    museum_data?: MuseumData
    requirements?: Requirement[]
    color?: string
    soulbound?: string
    has_uuid: any
    gemstone_slots?: GemstoneSlot[]
    glowing?: boolean
    can_auction?: boolean
    can_trade?: boolean
    can_place?: boolean
    museum?: boolean
    generator?: string
    generator_tier?: number
    furniture?: string
    item_specific?: ItemSpecific
    gear_score?: number
    dungeon_item?: boolean
    catacombs_requirements?: CatacombsRequirement[]
    can_recombobulate?: boolean
    salvageable_from_recipe?: boolean
    motes_sell_price?: number
    double_tap_to_drop?: boolean
    enchantments?: Enchantments
    rift_transferrable?: boolean
    origin?: string
    hide_from_viewrecipe_command?: boolean
    ability_damage_scaling?: number
    tiered_stats?: TieredStats
    crystal?: string
    can_burn_in_furnace?: boolean
    salvage?: Salvage2
    serializable?: boolean
    can_have_attributes?: boolean
    can_interact?: boolean
    can_interact_right_click?: boolean
    private_island?: string
    can_have_power_scroll?: boolean
    can_interact_entity?: boolean
    MINING_FORTUNE?: number
    sword_type?: string
    is_upgradeable_without_soulbinding?: boolean
    recipes?: Recipe[]
    cannot_reforge?: boolean
    lose_motes_value_on_transfer?: boolean
    can_have_booster?: boolean
    prestige?: Prestige
}

export interface Skin {
    value: string
    signature?: string
}

export interface Salvage {
    type: string
    essence_type?: string
    amount: number
    item_id?: string
}

export interface Stats {
    INTELLIGENCE?: number
    health_regeneration?: number
    health?: number
    fishing_speed?: number
    BREAKING_POWER?: number
    DAMAGE?: number
    MINING_SPEED?: number
    damage?: number
    strength?: number
    DEFENSE?: number
    HEALTH?: number
    TRUE_DEFENSE?: number
    WALK_SPEED?: number
    mending?: number
    STRENGTH?: number
    WEAPON_ABILITY_DAMAGE?: number
    ABILITY_DAMAGE_PERCENT?: number
    CRITICAL_DAMAGE?: number
    SEA_CREATURE_CHANCE?: number
    defense?: number
    sea_creature_chance?: number
    SWING_RANGE?: number
    CRITICAL_CHANCE?: number
    critical_damage?: number
    farming_wisdom?: number
    fishing_wisdom?: number
    pressure_resistance?: number
    fig_fortune?: number
    mangrove_fortune?: number
    respiration?: number
    sweep?: number
    foraging_fortune?: number
    FORAGING_FORTUNE?: number
    SWEEP?: number
    pull?: number
    magic_find?: number
    RIFT_DAMAGE?: number
    rift_damage?: number
    rift_intelligence?: number
    rift_health?: number
    rift_mana_regen?: number
    vitality?: number
    rift_time?: number
    rift_walk_speed?: number
    intelligence?: number
    RIFT_INTELLIGENCE?: number
    walk_speed?: number
    weapon_ability_damage?: number
    RIFT_TIME?: number
    tracking?: number
    rift_Time?: number
    FARMING_FORTUNE?: number
    farming_fortune?: number
    bonus_pest_chance?: number
    wheat_fortune?: number
    carrot_fortune?: number
    potato_fortune?: number
    melon_fortune?: number
    pumpkin_fortune?: number
    cocoa_beans_fortune?: number
    MINING_FORTUNE?: number
    COLD_RESISTANCE?: number
    DWARVEN_METAL_FORTUNE?: number
    combat_wisdom?: number
    ATTACK_SPEED?: number
    foraging_wisdom?: number
    mining_speed?: number
    mining_fortune?: number
    treasure_chance?: number
    FEROCITY?: number
    HEAT_RESISTANCE?: number
    GEMSTONE_FORTUNE?: number
    MAGIC_FIND?: number
    trophy_fish_chance?: number
    PRISTINE?: number
    ORE_FORTUNE?: number
    PET_LUCK?: number
    BLOCK_FORTUNE?: number
    FEAR?: number
    ferocity?: number
    double_hook_chance?: number
    heat_resistance?: number
    cold_resistance?: number
}

export interface DungeonItemConversionCost {
    essence_type: string
    amount: number
}

export interface UpgradeCost {
    type: string
    essence_type?: string
    amount: number
    item_id?: string
}

export interface MuseumData {
    type: string
    armor_set_donation_xp?: ArmorSetDonationXp
    parent?: Parent
    game_stage: string
    donation_xp?: number
    mapped_item_ids?: string[]
}

export interface ArmorSetDonationXp {
    ICHTHYIC?: number
    GILLSPLASH?: number
    FINWAVE?: number
    FERVOR?: number
    HOLLOW?: number
    AURORA?: number
    CRIMSON?: number
    TERROR?: number
    THUNDER?: number
    ADAPTIVE?: number
    SHADOW_ASSASSIN?: number
    ABYSSAL?: number
    FIG?: number
    CANOPY?: number
    SNORKELING?: number
    PARK?: number
    MANGROVE?: number
    END?: number
    ELEANOR?: number
    NUTCRACKER?: number
    SNOW_SUIT?: number
    LOTUS?: number
    MELON?: number
    SQUASH?: number
    RABBIT?: number
    SEYMOUR?: number
    CROPIE?: number
    BIOHAZARD?: number
    FERMENTO?: number
    ARMOR_OF_THE_PACK?: number
    MASTIFF?: number
    REAPER?: number
    REVENANT?: number
    PRIMORDIAL?: number
    TARANTULA?: number
    MONSTER_RAIDER?: number
    FINAL_DESTINATION?: number
    REKINDLED_EMBER?: number
    NECROMANCER_LORD?: number
    PUMPKIN?: number
    WISE_WITHER?: number
    LAVA_SEA_CREATURE?: number
    MOLTEN?: number
    ZOMBIE_SOLDIER?: number
    MERCENARY?: number
    TITANIUM?: number
    GOLD_HUNTER?: number
    SPEEDSTER?: number
    STRONG_DRAGON?: number
    LAPIS_ARMOR?: number
    ZOMBIE_LORD?: number
    MINER_OUTFIT?: number
    EMERALD_ARMOR?: number
    OLD_DRAGON?: number
    SHIMMERING_LIGHT?: number
    SPOOKY?: number
    HEAVY?: number
    CRIMSON_HUNTER?: number
    MAGMA_LORD?: number
    SKELETON_LORD?: number
    MUSHROOM?: number
    HOLY_DRAGON?: number
    FANCY_TUXEDO?: number
    BRONZE_HUNTER?: number
    ARMOR_OF_YOG?: number
    ZOMBIE_COMMANDER?: number
    TANK_WITHER?: number
    DIVAN?: number
    GLACITE?: number
    GOLEM_ARMOR?: number
    POWER_WITHER?: number
    ZOMBIE_KNIGHT?: number
    FROZEN_BLAZE?: number
    SKELETON_GRUNT?: number
    FARM_ARMOR?: number
    SUPER_HEAVY?: number
    SORROW?: number
    ROSETTA?: number
    LEAFLET?: number
    GEMSTONE?: number
    STARLIGHT?: number
    SQUIRE?: number
    MITHRIL?: number
    BLAZE?: number
    FLAME_BREAKER?: number
    GOBLIN?: number
    CACTUS?: number
    SPONGE?: number
    CRYSTAL?: number
    VANQUISHED?: number
    WITHER?: number
    ROTTEN?: number
    CELESTE?: number
    BERSERKER?: number
    PARTY?: number
    SUPERIOR_DRAGON?: number
    DIAMOND_HUNTER?: number
    MONSTER_HUNTER?: number
    BOUNCY?: number
    FARM_SUIT?: number
    YOUNG_DRAGON?: number
    WEREWOLF?: number
    ZOMBIE?: number
    DIVER?: number
    PROTECTOR_DRAGON?: number
    HARDENED_DIAMOND?: number
    SILVER_HUNTER?: number
    FAIRY?: number
    HEAT?: number
    SKELETOR?: number
    UNSTABLE_DRAGON?: number
    SALMON_NEW?: number
    SPEED_WITHER?: number
    WISE_DRAGON?: number
    GROWTH?: number
    BAT_PERSON?: number
    SKELETON_MASTER?: number
    SKELETON_SOLDIER?: number
    RAMPART?: number
    TANK_MINER?: number
    ELEGANT_TUXEDO?: number
    CHEAP_TUXEDO?: number
    SHARK_SCALE?: number
    CHALLENGER?: number
    MYTHOS?: number
    MINERAL?: number
    GLOSSY_MINERAL?: number
    FISHERMAN?: number
    ANGLER?: number
    BACKWATER?: number
    PERFECT_TIER_12?: number
    PERFECT_TIER_13?: number
    ARACHNE?: number
}

export interface Parent {
    ICHTHYIC?: string
    FINWAVE?: string
    BONE_REAVER?: string
    ABYSMAL_LASSO?: string
    VINERIP_LASSO?: string
    SMALL_POCKET_BLACK_HOLE?: string
    ENTANGLER_LASSO?: string
    FIG_AXE?: string
    SERIOUSLY_DAMAGED_AXE?: string
    JUNGLE_AXE?: string
    MEDIUM_FISHING_NET?: string
    BASIC_FISHING_NET?: string
    VENATOR_GENESIS?: string
    SILVA_DOMINUS?: string
    APEX_PRAEDATOR?: string
    CURSUS_FERAE?: string
    CANOPY?: string
    SNORKELING?: string
    MEDIUM_SCAFFOLDING?: string
    TINY_SCAFFOLDING?: string
    FROZEN_SCYTHE?: string
    SNOW_SUIT?: string
    SAM_SCYTHE?: string
    BASIC_GARDENING_AXE?: string
    BASIC_GARDENING_HOE?: string
    MELON_DICER_2?: string
    MELON?: string
    SQUASH?: string
    CROPIE?: string
    PUMPKIN_DICER_2?: string
    SKYMART_TURBO_VACUUM?: string
    SKYMART_HYPER_VACUUM?: string
    SKYMART_VACUUM?: string
    INFINI_VACUUM?: string
    GLACITE_CHISEL?: string
    REINFORCED_CHISEL?: string
    SHAMAN_SWORD?: string
    MANA_FLUX_POWER_ORB?: string
    RADIANT_POWER_ORB?: string
    OVERFLUX_POWER_ORB?: string
    WEIRD_TUBA?: string
    REAPER_SWORD?: string
    REVENANT_SWORD?: string
    WAND_OF_MENDING?: string
    WAND_OF_HEALING?: string
    WAND_OF_RESTORATION?: string
    VOODOO_DOLL?: string
    REVENANT?: string
    CRYSTALLIZED_HEART?: string
    REVIVED_HEART?: string
    RECLUSE_FANG?: string
    SCORPION_BOW?: string
    TARANTULA_FANG?: string
    SCORPION_FOIL?: string
    TARANTULA?: string
    VOIDWALKER_KATANA?: string
    VORPAL_KATANA?: string
    VOIDEDGE_KATANA?: string
    ALERT_FLARE?: string
    WARNING_FLARE?: string
    FIREDUST_DAGGER?: string
    MAWDUST_DAGGER?: string
    BURSTMAW_DAGGER?: string
    BURSTFIRE_DAGGER?: string
    DESTRUCTION_CLOAK?: string
    WISE_WITHER?: string
    GOLD_HUNTER?: string
    ZOMBIE_SWORD?: string
    SPOOKY?: string
    CRIMSON_HUNTER?: string
    GOLD_LIVID_HEAD?: string
    MUSHROOM?: string
    FANCY_TUXEDO?: string
    BRONZE_HUNTER?: string
    SHADOW_GOGGLES?: string
    TANK_WITHER?: string
    TITANIUM_DRILL_2?: string
    TITANIUM_DRILL_4?: string
    UNDEAD_BOW?: string
    HYPER_CLEAVER?: string
    UNDEAD_SWORD?: string
    SCYLLA?: string
    MITHRIL?: string
    BLAZE?: string
    FLAME_BREAKER?: string
    TITANIUM_DRILL_1?: string
    SPIDER_SWORD?: string
    SPONGE?: string
    DOJO_BLUE_BELT?: string
    NECRON_BLADE?: string
    WITHER?: string
    BANDAGED_MITHRIL_PICKAXE?: string
    TITANIUM_DRILL_3?: string
    SYNTHESIZER_V1?: string
    VAMPIRE_MASK?: string
    MONSTER_HUNTER?: string
    SOUL_WHIP?: string
    SNOW_CANNON?: string
    GOLD_SCARF_HEAD?: string
    ZOMBIE?: string
    DOJO_WHITE_BELT?: string
    DIVER?: string
    WITCH_MASK?: string
    HARDENED_DIAMOND?: string
    SILVER_HUNTER?: string
    VALKYRIE?: string
    ORNATE_ZOMBIE_SWORD?: string
    GEMSTONE_DRILL_3?: string
    SPEED_WITHER?: string
    GROWTH?: string
    GOLD_SADAN_HEAD?: string
    SUPER_CLEAVER?: string
    METAL_CHESTPLATE?: string
    FRACTURED_MITHRIL_PICKAXE?: string
    MENDER_FEDORA?: string
    MENDER_HELMET?: string
    GOLD_BONZO_HEAD?: string
    DOJO_BROWN_BELT?: string
    TANK_MINER?: string
    SPIRIT_SWORD?: string
    SUPER_UNDEAD_BOW?: string
    MITHRIL_PICKAXE?: string
    LEAPING_SWORD?: string
    ZOMBIE_HEART?: string
    GOLD_PROFESSOR_HEAD?: string
    DARK_GOGGLES?: string
    FARMER_BOOTS?: string
    GOLD_NECRON_HEAD?: string
    CHEAP_TUXEDO?: string
    TITANIUM_PICKAXE?: string
    GEMSTONE_DRILL_1?: string
    MITHRIL_DRILL_1?: string
    RUSTY_TITANIUM_PICKAXE?: string
    DOJO_YELLOW_BELT?: string
    ASPECT_OF_THE_END?: string
    CLEAVER?: string
    GEMSTONE_DRILL_2?: string
    SNOW_BLASTER?: string
    STONE_CHESTPLATE?: string
    FLOWER_OF_TRUTH?: string
    SYNTHESIZER_V2?: string
    DOJO_GREEN_BELT?: string
    GOLD_THORN_HEAD?: string
    ASTRAEA?: string
    CHALLENGER?: string
    ARCHAIC_SPADE?: string
    CROWN_OF_GREED?: string
    ANCESTRAL_SPADE?: string
    SWORD_OF_REVELATIONS?: string
    MINERAL?: string
    INFERNO_ROD?: string
    CHALLENGE_ROD?: string
    MAGMA_ROD?: string
    LEGEND_ROD?: string
    CHAMP_ROD?: string
    ANGLER?: string
    PERFECT_TIER_12?: string
    PUMPKIN_DICER?: string
    THEORETICAL_HOE_WARTS_2?: string
    THEORETICAL_HOE_POTATO_1?: string
    THEORETICAL_HOE_WARTS_1?: string
    THEORETICAL_HOE_CANE_2?: string
    THEORETICAL_HOE_CARROT_1?: string
    THEORETICAL_HOE_POTATO_2?: string
    THEORETICAL_HOE_CARROT_2?: string
    THEORETICAL_HOE_WHEAT_1?: string
    THEORETICAL_HOE_CANE_1?: string
    THEORETICAL_HOE_WHEAT_2?: string
    MELON_DICER?: string
}

export interface Requirement {
    type: string
    skill?: string
    level?: number
    dungeon_type?: string
    tier?: number
    slayer_boss_type?: string
    collection?: string
    minimum_age_unit?: string
    minimum_age?: number
    reward?: string
    requirements?: Requirement2[]
    lore_index?: number
    rabbit?: string
    faction?: string
    reputation?: number
    mode?: string
    kuudra_tier?: string
}

export interface Requirement2 {
    type: string
    profile_type?: string
    tier?: number
}

export interface GemstoneSlot {
    slot_type: string
    costs?: Cost[]
}

export interface Cost {
    type: string
    item_id?: string
    amount?: number
    coins?: number
}

export interface ItemSpecific {
    bundled_item_id?: string
    bundled_amount?: number
    speed_on_farming_island?: number
    extra_pelts?: number
    permanent_health?: number
    permanent_crops_farming_fortune?: number
    default_skin?: DefaultSkin
    rarity_skins?: RaritySkin[]
    capture_skins?: CaptureSkin[]
    mana_refund?: number
    cooldown_seconds?: number
    bonus_heal?: number
    heal?: number
    mana_cost?: number
    bonus_rift_damage_vs_vampire?: number
    heal_on_hit?: number
    duration_ticks?: number
    damage_multiplier?: number
    rift_time_per_eat?: number
    motes_percent_per_eat?: number
    motes_on_join_per_eat?: number
    stats_on_rift?: StatsOnRift
    speed_duration_seconds?: number
    bonus_fishing_speed_per_bucket?: number
    max_bonus_fishing_speed?: number
    slow_duration_seconds?: number
    experience_gained?: number
    charges?: number
    consumed_item?: string
    rift_time_gain?: number
    ray_texture?: RayTexture
    memorable_event_key?: string
    flex_skins?: FlexSkin[]
    regained_rift_time?: number
    rift_time_regain_on_kill?: number
    hearts_reduction?: number
    range_blocks?: number
    max_players?: number
    damage_per_player?: number
    mana_regen_per_player?: number
    swappables?: Swappables
    scaling?: Scaling
    chisel_charges?: number
    stats?: Stats3
    rift_stats?: RiftStats
    duration_seconds?: number
    range?: number
    max_other_players?: number
    particle_color?: ParticleColor
    speed_boost?: number
    effect_duration_seconds?: number
    bonus_experience_chance?: number
    portal?: Portal
    max_contacts?: number
    has_contact_directory?: boolean
    has_dnd?: boolean
    max_musicdiscs?: number
    model?: string
}

export interface DefaultSkin {
    value: string
    signature: string
}

export interface RaritySkin {
    value: string
    signature: string
}

export interface CaptureSkin {
    value: string
    signature: string
}

export interface StatsOnRift {
    rift_time: number
    rift_intelligence: number
    rift_mana_regen: number
}

export interface RayTexture {
    value: string
    signature: string
}

export interface FlexSkin {
    skin: Skin2
    name: string
    description: string
}

export interface Skin2 {
    value: string
    signature: string
}

export interface Swappables {
    white: White
    orange: Orange
    magenta: Magenta
    light_blue: LightBlue
    yellow: Yellow
    lime: Lime
    pink: Pink
    gray: Gray
    silver: Silver
    cyan: Cyan
    purple: Purple
    blue: Blue
    brown: Brown
    green: Green
    red: Red
    black: Black
}

export interface White {
    color: string
    value: string
    signature: string
}

export interface Orange {
    color: string
    value: string
    signature: string
}

export interface Magenta {
    color: string
    value: string
    signature: string
}

export interface LightBlue {
    color: string
    value: string
    signature: string
}

export interface Yellow {
    color: string
    value: string
    signature: string
}

export interface Lime {
    color: string
    value: string
    signature: string
}

export interface Pink {
    color: string
    value: string
    signature: string
}

export interface Gray {
    color: string
    value: string
    signature: string
}

export interface Silver {
    color: string
    value: string
    signature: string
}

export interface Cyan {
    color: string
    value: string
    signature: string
}

export interface Purple {
    color: string
    value: string
    signature: string
}

export interface Blue {
    color: string
    value: string
    signature: string
}

export interface Brown {
    color: string
    value: string
    signature: string
}

export interface Green {
    color: string
    value: string
    signature: string
}

export interface Red {
    color: string
    value: string
    signature: string
}

export interface Black {
    color: string
    value: string
    signature: string
}

export interface Scaling {
    tiers: Tier[]
}

export interface Tier {
    numeric: number
    item_tier?: string
    stats: Stats2
}

export interface Stats2 {
    intelligence?: number
    magic_find?: number
    RIFT_TIME?: number
    health?: number
    strength?: number
    rift_walk_speed?: number
    rift_intelligence?: number
    rift_mana_regen?: number
    defense?: number
    rift_damage?: number
    combat_wisdom?: number
    farming_wisdom?: number
    enchanting_wisdom?: number
    rift_health?: number
}

export interface Stats3 {
    strength: number
    critical_damage?: number
    attack_speed?: number
    walk_speed: number
}

export interface RiftStats {
    rift_damage: number
    rift_walk_speed: number
}

export interface ParticleColor {
    red: number
    green: number
    blue: number
}

export interface Portal {
    holo_name: string
    description_name?: string
    destination_mode: string
    offset?: string
    schematic_file: string
    location_tag?: string
    skill_requirement?: SkillRequirement
    objective_requirement?: ObjectiveRequirement
    requirements?: Requirement3[]
}

export interface SkillRequirement {
    skill: string
    level: number
}

export interface ObjectiveRequirement {
    objective_id: string
    objective_status: string
}

export interface Requirement3 {
    type: string
    skill?: string
    level?: number
    quest?: string
}

export interface CatacombsRequirement {
    type: string
    dungeon_type: string
    level: number
}

export interface Enchantments {
    aiming?: number
    ultimate_the_one?: number
    quantum?: number
    transylvanian?: number
    reflection?: number
    replenish?: number
    sharpness?: number
    efficiency?: number
    power?: number
    big_brain?: number
    vicious?: number
    counter_strike?: number
    depth_strider?: number
    respiration?: number
    aqua_affinity?: number
    feather_falling?: number
    small_brain?: number
    thorns?: number
    ultimate_chimera?: number
    pristine?: number
    rainbow?: number
}

export interface TieredStats {
    DAMAGE?: number[]
    WEAPON_ABILITY_DAMAGE?: number[]
    INTELLIGENCE?: number[]
    DEFENSE?: number[]
    HEALTH?: number[]
    STRENGTH?: number[]
    WALK_SPEED?: number[]
    CRITICAL_DAMAGE?: number[]
    CRITICAL_CHANCE?: number[]
    ATTACK_SPEED?: number[]
}

export interface Salvage2 {
    item_id: string
    amount: number
}

export interface Recipe {
    output: Output
    ingredient_symbols: IngredientSymbols
    matrix: string[]
    allow_quick_crafting: boolean
}

export interface Output {
    item_id: string
}

export interface IngredientSymbols {
    A: string
    B: string
    C: string
    D: string
    E: string
    F: string
}

export interface Prestige {
    item_id: string
    costs: Cost2[]
}

export interface Cost2 {
    type: string
    essence_type?: string
    amount: number
    item_id?: string
}