// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";
import { SourceType } from '../wk2/source-type.js';
export class Metadata {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsMetadata(bb, obj) {
        return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsMetadata(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    attributionUrl(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    expireTime() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    language(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    latitude() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    longitude() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    unknown5() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    providerName(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    readTime() {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    reportedTime() {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    unknown9() {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    sourceType() {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : SourceType.APPLE_INTERNAL;
    }
    unknown11() {
        const offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    unknown12() {
        const offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    unknown13() {
        const offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    unknown14() {
        const offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    unknown15() {
        const offset = this.bb.__offset(this.bb_pos, 34);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    static startMetadata(builder) {
        builder.startObject(16);
    }
    static addAttributionUrl(builder, attributionUrlOffset) {
        builder.addFieldOffset(0, attributionUrlOffset, 0);
    }
    static addExpireTime(builder, expireTime) {
        builder.addFieldInt32(1, expireTime, 0);
    }
    static addLanguage(builder, languageOffset) {
        builder.addFieldOffset(2, languageOffset, 0);
    }
    static addLatitude(builder, latitude) {
        builder.addFieldFloat32(3, latitude, 0.0);
    }
    static addLongitude(builder, longitude) {
        builder.addFieldFloat32(4, longitude, 0.0);
    }
    static addUnknown5(builder, unknown5) {
        builder.addFieldInt32(5, unknown5, 0);
    }
    static addProviderName(builder, providerNameOffset) {
        builder.addFieldOffset(6, providerNameOffset, 0);
    }
    static addReadTime(builder, readTime) {
        builder.addFieldInt32(7, readTime, 0);
    }
    static addReportedTime(builder, reportedTime) {
        builder.addFieldInt32(8, reportedTime, 0);
    }
    static addUnknown9(builder, unknown9) {
        builder.addFieldInt32(9, unknown9, 0);
    }
    static addSourceType(builder, sourceType) {
        builder.addFieldInt8(10, sourceType, SourceType.APPLE_INTERNAL);
    }
    static addUnknown11(builder, unknown11) {
        builder.addFieldInt32(11, unknown11, 0);
    }
    static addUnknown12(builder, unknown12) {
        builder.addFieldInt32(12, unknown12, 0);
    }
    static addUnknown13(builder, unknown13) {
        builder.addFieldInt32(13, unknown13, 0);
    }
    static addUnknown14(builder, unknown14) {
        builder.addFieldInt32(14, unknown14, 0);
    }
    static addUnknown15(builder, unknown15) {
        builder.addFieldInt32(15, unknown15, 0);
    }
    static endMetadata(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createMetadata(builder, attributionUrlOffset, expireTime, languageOffset, latitude, longitude, unknown5, providerNameOffset, readTime, reportedTime, unknown9, sourceType, unknown11, unknown12, unknown13, unknown14, unknown15) {
        Metadata.startMetadata(builder);
        Metadata.addAttributionUrl(builder, attributionUrlOffset);
        Metadata.addExpireTime(builder, expireTime);
        Metadata.addLanguage(builder, languageOffset);
        Metadata.addLatitude(builder, latitude);
        Metadata.addLongitude(builder, longitude);
        Metadata.addUnknown5(builder, unknown5);
        Metadata.addProviderName(builder, providerNameOffset);
        Metadata.addReadTime(builder, readTime);
        Metadata.addReportedTime(builder, reportedTime);
        Metadata.addUnknown9(builder, unknown9);
        Metadata.addSourceType(builder, sourceType);
        Metadata.addUnknown11(builder, unknown11);
        Metadata.addUnknown12(builder, unknown12);
        Metadata.addUnknown13(builder, unknown13);
        Metadata.addUnknown14(builder, unknown14);
        Metadata.addUnknown15(builder, unknown15);
        return Metadata.endMetadata(builder);
    }
}