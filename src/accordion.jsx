import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
function Accordion({ items }) {
	let [expanableIndex, setExpanableIndex] = useState(-1);

	let handleClick = (nextIndex) => {
		setExpanableIndex(nextIndex);
		if (nextIndex === expanableIndex) {
			setExpanableIndex(-1);
		}
	};
	let renderItems = items.map((item, index) => {
		let isExpandeble = index === expanableIndex;
		const icon = (
			<span>{isExpandeble ? <GoChevronDown /> : <GoChevronRight />}</span>
		);

		// let handleClick = () => {
		//    setExpanableIndex(index);
		//    if (index === expanableIndex) {
		//       setExpanableIndex(-1);
		//    }
		// };
		return (
			<div key={item.id}>
				<h2 onClick={() => handleClick(index)}>
					{item.title}
					{icon}
				</h2>
				{isExpandeble && <p>{item.content}</p>}
			</div>
		);
	});

	return <div>{renderItems}</div>;
}

export default Accordion;
