// @flow
declare module 'mobx-state-tree' {
    declare export type ActionModelType<PropertyType, ActionType> = $Exact<{
        ...PropertyType,
        ...ActionType,
    }>;

    declare class Model<PropertyType, ActionType> {
        constructor(name: string, type: $Call<ExtractReturnType, PropertyType>): Model<PropertyType, ActionType>,
        actions<PropertyType, ActionType>((self: ActionModelType<PropertyType, ActionType>) => ActionType): Model<PropertyType, ActionType>,
        // create(initialState: {}): Store,
    }


    declare type ModelType<NativeType> = NativeType;
    declare type ExtractReturnType = <V>(V) => ModelType<V>;

    declare export var types: {|
        +model: <PropertyType, ActionType>(name: string, type: $Call<ExtractReturnType, PropertyType>) => Model<PropertyType, ActionType>,

        +boolean: ModelType<boolean>,
        +number: ModelType<number>,
        +string: ModelType<string>,
        +array: <T>(item: T) => Array<T>,
    |}
}
