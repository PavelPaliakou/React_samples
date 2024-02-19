import MenuElement from "./menuElement"

export default function MenuList(list = []) {
    console.log(list);

    return (
        <>
            {
              list.map((e) => {
                        console.log(e);
                        return (
                            <div>
                                <MenuElement element={e} />
                            </div>
                        )
                    })

                
            }
        </>
    )
}