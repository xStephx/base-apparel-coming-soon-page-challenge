tailwind.config = {
    theme: {
        extend: {
            colors: {
                DesaturatedRed: 'hsl(0, 36%, 70%)',
                SoftRed: 'hsl(0, 93%, 68%)',
                DarkGrayishRed: 'hsl(0, 6%, 24%)',
            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
                'secondary-gradient': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
            },
        },
        fontFamily: {
            JosefinSans: ['Josefin Sans', 'sans-serif'],
        }
    },
    plugins: [],
}