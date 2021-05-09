initSidebarItems({"enum":[["ReadOnly","`ReadOnly` is the access policy used for reading checkpoints. We don't want to ever modify persisted states."],["RwPolicy","`RwPolicy` is the access policy used for tip on disk state."],["WriteOnly","`WriteOnly` is the access policy used while we are creating a new checkpoint."]],"struct":[["CanisterLayout",""],["CanisterStateBits","This struct contains bits of the `CanisterState` that are not already covered somewhere else and are too small to be serialized separately."],["CheckpointLayout",""],["ExecutionStateBits","This struct contains bits of the `ExecutionState` that are not already covered somewhere else and are too small to be serialized separately."],["ProtoFileWith",""],["StateLayout","`StateLayout` provides convenience functions to construct correct paths to individual components of the replicated execution state. It also utilizes filesystem specific checkpoint managers to create and manage checkpoints."],["WasmFile","A value of type `WasmFile` declares that some path should contain a Wasm module and provides a way to read it from disk or write it to disk."]],"trait":[["AccessPolicy",""],["CheckpointManager",""],["ReadPolicy",""],["ReadWritePolicy",""],["WritePolicy",""]],"type":[["CompleteCheckpointLayout",""]]});