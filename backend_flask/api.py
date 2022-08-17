url = 'http://localhost:8069'
db = 'odb15'
username = 'eespinozape@unsa.edu.pe'
password = 'SMITEcsgo17'

# For this example we would be using the native xmlrpc python library.
import xmlrpc.client   
import base64
import csv
import json

# This is to test the connection with odoo server.
#common = xmlrpc.client.ServerProxy('%s/xmlrpc/2/common' % url)
common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
output = common.version()
#print(str("Version: "), output)

# This call tests the credentials and returns the user ID for the next calls.
uid = common.authenticate(db, username, password, {})
print(str("User ID: "), uid)

# Initialize the models endpoint.
models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))

# CALLING METHODS
idfalse=15
# Example to read fields from a specific partner.
# fields = models.execute_kw(db, uid, password,
#     'res.partner', 'search_read',
#     [[
#         ['is_company', '=', True], # Ignore contacts within the desired partner.
#         ['vat', '=', 'BE0477472701'], # Search only for specific VAT.
#     ]],
#     {'fields': [
#         'total_due', # Monetary: Total due.
#         'total_invoiced', # Monetary: Total invoiced.
#         'total_overdue', # Monetary: Total overdue.
#         ], 'limit': 5})
# print(str("Contact selected fields: "), fields)

# List records

# fields = models.execute_kw(db, uid, password,
#     'res.partner', 'search',
#     [[['is_company', '=', True]]])

# print(str("List selected record fields: "), fields)

# Count records

# fields = models.execute_kw(db, uid, password,
#     'res.partner', 'search_count',
#     [[['is_company', '=', True]]])

# print(str("Count record fields: "), fields)

# Read records

# ids = models.execute_kw(db, uid, password,
#     'res.partner', 'search',
#     [[['is_company', '=', True]]],
#     {'limit': 1})
# [record] = models.execute_kw(db, uid, password,
#     'res.partner', 'read', [ids])

# count the number of fields fetched by default
#len(record)
#print(str("List of read records: "), ids)

# details = models.execute_kw(db, uid, password,
#     'res.partner', 'read',
#     [ids], {'fields': ['name', 'country_id', 'property_product_pricelist','opportunity_ids','opportunity_count','credit','debit',
#      'debit_limit','total_invoiced','customer_rank','city_id','trust','team_id','company_type',
#      'credit_limit','category_id','sale_order_count']})

# print(str("Details from list of record fields: "), details)


# Listing record fields
'''
listing = models.execute_kw(
    db, uid, password, 'res.partner', 'fields_get',
    [], {'attributes': ['string','help', 'type']})

print(str("Listing record fields: "), listing)
'''

models.execute_kw(db, uid, password, 'res.partner', 'write', [[22], {
    'credit_limit': 287550.0,
    'debit_limit': 348882.0,
    'trust': "good",
}])

# Search and read

companies = models.execute_kw(db, uid, password,
    'res.partner', 'search_read',
    [[['is_company', '=', True]]],
    {'fields': ['name', 'country_id', 'property_product_pricelist','opportunity_ids','opportunity_count','credit','debit',
     'debit_limit','total_invoiced','customer_rank','city_id','trust','team_id','company_type',
     'credit_limit','category_id','sale_order_count'], 'limit': 100})

individuals = models.execute_kw(db, uid, password,
    'res.partner', 'search_read',
    [[['is_company', '=', False]]],
    {'fields': ['name', 'country_id', 'property_product_pricelist','opportunity_ids','opportunity_count','credit','debit',
     'debit_limit','total_invoiced','customer_rank','city_id','trust','team_id','company_type',
     'credit_limit','category_id','sale_order_count'], 'limit': 100})




fields = companies[0]
datalist = []
for obj in companies:
    datalist.append(obj.values()) 
for obj in individuals:
    datalist.append(obj.values()) 

#GENERATE CSV FILE
with open('data.csv','w', newline = '') as file:
    writer = csv.writer(file,delimiter=',')
    writer.writerow(fields)
    writer.writerows(datalist)

