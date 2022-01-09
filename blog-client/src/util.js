

export const addChildInTree = (obj, el) => 
  Array .isArray (obj) 
    ? obj .map (o => addChildInTree (o, el))
  : obj .id === el .id 
    ?  el
  : // else
    {...obj, ...(obj .children ? {children: addChildInTree (obj .children, el)} : {})}
