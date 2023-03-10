import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean = false) => {
    const [toggleState, setToggleState] = useState<boolean>(initialState);
    const toggle = useCallback(() => setToggleState(prevToggleState => !prevToggleState), [])
    return [toggleState, toggle] as const;
};

export default useToggle;