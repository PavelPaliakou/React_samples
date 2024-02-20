import MenuElement from "./menuElement"

export default function MenuList({ list = 0 }) {
    // console.log(list);

    return (
        <div className="menu-container">
            {
                list.map((e) => {
                    return (
                        <div>
                            <MenuElement key={e.label} element={e} />
                        </div>
                    )
                })


            }
        </div>
    )
}