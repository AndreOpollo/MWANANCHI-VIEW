# Generated by Django 4.2.6 on 2023-11-03 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_report'),
    ]

    operations = [
        migrations.CreateModel(
            name='CountyServices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('county', models.CharField(max_length=255)),
                ('services', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Services',
        ),
    ]
