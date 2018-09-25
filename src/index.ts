import * as Babel from '@babel/core';
import { NodePath } from '@babel/traverse';
import {Identifier, ArrayExpression } from '@babel/types';
export default function(babel:typeof Babel) {
  const t = babel.types;

  return {
    visitor: {
      ArrayExpression(path:NodePath<ArrayExpression>){
        let obj: any[] = []
        path.node.elements.forEach((element:any) => {
          const prop = t.objectProperty(t.stringLiteral(element.value.toString()), t.numericLiteral(element.value))
          obj.push(prop)
        })
       path.replaceWith(
       	t.objectExpression(obj)
       )
      }
    }
  };
};
