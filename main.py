from flask import Flask, render_template

app = Flask(__name__)

portfolio = [
    {
        'name': 'What year is it ?',
        'image': '/images/proj1.png',
        'link': '/'
    },
    {
        'name': 'Quiz',
        'image': '/images/proj2.png',
        'link': '/'
    },
    {
        'name': 'BookStack',
        'image': '/images/proj3.png',
        'link': 'https://preeminent-kitten-beeb7c.netlify.app/'
    },
    {
        'name': 'AnimalWorld',
        'image': '/images/proj4.png',
        'link': 'https://sparkling-cocada-6f7251.netlify.app/'
    },
    
    

]

contact_info = {
    'ім\'я': 'Darya',
    'email': 'dasaakimenko860@gmail.com',
    'телефон': '+380983170583',
    'адреса': 'Solomenskaya 7'
}

blog_posts = [
    {
        'header': 'Post1',
        'content': 'This is the first blog post .'
    },
    {
        'header': 'Post2',
        'content': 'This is the second blog post.'
    },
]

@app.route('/')
def index():
    return render_template('index.html', portfolio=portfolio, contact=contact_info, blog=blog_posts)

if __name__ == '__main__':
    app.run(debug=True)
