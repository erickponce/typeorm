import {Entity} from "../../../../../src/decorator/entity/Entity";
import {Column} from "../../../../../src/decorator/columns/Column";
import {Counters} from "./Counters";
import {Index} from "../../../../../src/decorator/Index";
import {PrimaryColumn} from "../../../../../src/decorator/columns/PrimaryColumn";

@Entity()
@Index(["id", "counters.code", "counters.subcounters.version"])
export class Post {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column(() => Counters)
    counters: Counters;

}