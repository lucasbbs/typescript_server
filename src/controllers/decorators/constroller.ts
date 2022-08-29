import 'reflect-metadata';
import express from 'express';

export function controller(routePrefix: string) {
  return function (target: Function, key: string) {
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata('path', target.prototype);
    }
  };
}
