import { useState } from 'react';

function useTextExpander({ children, collapsedNumWords = 100, expanded = false }) {
  const [expand, setExpand] = useState(expanded);

  function handleClick() {
    setExpand(() => !expand);
  }

  const isExpanded = expand ? children : children.split('').splice(0, collapsedNumWords).join('') + '....';

  if (children.length <= 10) isExpanded;

  return { children, expanded, expand, isExpanded, handleClick };
}

function TextExpander({ children, collapsedNumWords = 100, expanded = false, expandButtonText = 'Show more', collapseButtonText = 'show less' }) {
  {
    const { isExpanded, expand, handleClick } = useTextExpander({
      children,
      collapsedNumWords,
      expanded,
    });

    return <>{isExpanded}</>;
  }
}

export default TextExpander;
