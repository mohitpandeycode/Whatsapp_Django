# Generated by Django 5.0.3 on 2024-07-06 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_alter_user_chat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='chat',
            field=models.TextField(default=''),
        ),
    ]
