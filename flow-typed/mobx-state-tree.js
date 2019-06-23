// @flow
declare module 'mobx-state-tree' {
    declare class Model {
        constructor<PropertyType>(name: string, type: {}): Model<PropertyType>,
        // actions(func: (self: Model) => mixed): Model,
        // create(initialState: {}): Store,
    }

    declare type ModelType<NativeType> = NativeType;
    declare type ExtractReturnType = <V>(V) => ModelType<V>;

    declare export var types: {|
        +model: <PropertyType>(name: string, type: $Call<ExtractReturnType, PropertyType>) => Model<PropertyType>,

        +boolean: ModelType<boolean>,
        +number: ModelType<number>,
        +string: ModelType<string>,
        +array: <T>(item: T) => Array<T>,
    |}
}
