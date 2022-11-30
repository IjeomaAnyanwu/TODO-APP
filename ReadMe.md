var pipline = [
    {$sort:{"price": -1}},
    {$limit: 1}
]

db.shop.aggregate(pipline)