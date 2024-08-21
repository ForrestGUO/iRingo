// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";

import { PollutantType } from '../wk2/pollutant-type.js';
import { UnitType } from '../wk2/unit-type.js';


export class Pollutant {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Pollutant {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPollutant(bb:flatbuffers.ByteBuffer, obj?:Pollutant):Pollutant {
  return (obj || new Pollutant()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPollutant(bb:flatbuffers.ByteBuffer, obj?:Pollutant):Pollutant {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Pollutant()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

pollutantType():PollutantType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : PollutantType.NOT_AVAILABLE;
}

amount():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

units():UnitType {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : UnitType.PARTS_PER_BILLION;
}

static startPollutant(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addPollutantType(builder:flatbuffers.Builder, pollutantType:PollutantType) {
  builder.addFieldInt8(0, pollutantType, PollutantType.NOT_AVAILABLE);
}

static addAmount(builder:flatbuffers.Builder, amount:number) {
  builder.addFieldFloat32(1, amount, 0.0);
}

static addUnits(builder:flatbuffers.Builder, units:UnitType) {
  builder.addFieldInt8(2, units, UnitType.PARTS_PER_BILLION);
}

static endPollutant(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPollutant(builder:flatbuffers.Builder, pollutantType:PollutantType, amount:number, units:UnitType):flatbuffers.Offset {
  Pollutant.startPollutant(builder);
  Pollutant.addPollutantType(builder, pollutantType);
  Pollutant.addAmount(builder, amount);
  Pollutant.addUnits(builder, units);
  return Pollutant.endPollutant(builder);
}
}