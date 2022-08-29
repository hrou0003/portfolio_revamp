
const generateTextAtribs = (tw?: boolean) => {

    const colors = ['yellow-500', 'green-500', 'sky-500', 'red-500', 'pink-500']
    const hexColors = ['#84CC16', '#F59E0B', '#EF4444', '#3B82F6', '#EC4899']
    const angles = [-3, -2, 2, 3]

    const random = (arr: any[]) => {
        return arr[Math.floor(arr.length * Math.random())];
    }


    return [
        random(tw ? colors : hexColors),
        random(angles)
    ]
    
}

export { generateTextAtribs };